import React from 'react';
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  View,
  TouchableOpacity,
} from 'react-native';
import AppText from '../components/AppText';
import colors from '../config/colors';
import constants from '../config/constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Seperator from '../components/Seperator';
import {useSelector} from 'react-redux';
import {Card} from 'react-native-paper';

export default function OrdersScreen(props) {
  const {navigation} = props;
  const {list: orders} = useSelector((state) => state.order);
  console.log('orders', orders);

  const renderItem = ({item}) => {
    return (
      <View style={{padding: 12}}>
        <View style={{flexDirection: 'row'}}>
          <Card style={{width: 70, height: 70}} />
          <View
            style={{
              flexDirection: 'column',
              marginStart: 8,
            }}>
            <AppText
              style={{
                fontFamily: constants.medium,
                fontSize: 14,
              }}>
              {item.services.title}
            </AppText>
            <AppText
              style={{
                fontFamily: constants.regular,
                fontSize: 14,
              }}>
              {item.orderedOn}
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
