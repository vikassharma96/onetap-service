import React from 'react';
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  View,
  TouchableOpacity,
} from 'react-native';
import AppText from '../../components/AppText';
import colors from '../../config/colors';
import constants from '../../config/constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Seperator from '../../components/Seperator';
import {useSelector} from 'react-redux';
import {Card} from 'react-native-paper';
import SERVICES from '../../data/ServicesData';
import {windowHeight, windowWidth} from '../../config/utils';

export default function OrdersScreen(props) {
  const {navigation} = props;
  const {list: orders} = useSelector((state) => state.order);
  console.log('orders', orders);

  const renderItem = ({item}) => {
    const currentService = SERVICES.find(
      (service) => service.id === item.services[0].serviceId,
    );
    return (
      <View style={{padding: 12}}>
        <View style={{flexDirection: 'row'}}>
          <Card style={{width: 70, height: 70}} />
          <View
            style={{
              flexDirection: 'column',
              marginStart: 12,
            }}>
            <AppText
              style={{
                fontFamily: constants.medium,
                fontSize: 14,
              }}>
              {currentService.title}
            </AppText>
            <AppText
              style={{
                fontFamily: constants.regular,
                fontSize: 12,
              }}>
              {item.orderedOn}
            </AppText>
            <AppText
              style={{
                fontFamily: constants.semiBold,
                fontSize: 14,
              }}>
              ₹{item.total}
            </AppText>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon size={28} name={'arrow-left'} color={colors.accent} />
        </TouchableOpacity>
        <AppText style={styles.headerText}>{'My Orders'}</AppText>
      </View>
      <Seperator color={colors.seperator} />
      {orders.length === 0 && (
        <View
          style={{
            height: windowHeight,
            // justifyContent: 'center',
            marginTop: windowHeight * 0.2,
            alignItems: 'center',
          }}>
          <Card
            style={{
              height: '40%',
              width: '70%',
              borderRadius: 8,
              elevation: 8,
            }}>
            <View
              style={{
                padding: 12,
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
              }}>
              <Icon
                name={'emoticon-sad-outline'}
                size={86}
                color={colors.accent}
              />
              <AppText
                style={{
                  textAlign: 'center',
                  marginTop: 12,
                }}>
                {'No Orders Found'}
              </AppText>
            </View>
          </Card>
        </View>
      )}
      <FlatList
        data={orders}
        keyExtractor={(item) => item.orderNo.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  headerText: {
    marginStart: 20,
    fontSize: 18,
    color: colors.accent,
    fontFamily: constants.medium,
  },
});
