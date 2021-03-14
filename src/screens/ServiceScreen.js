import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppText from '../components/AppText';
import colors from '../config/colors';
import constants from '../config/constants';
import defaultStyles from '../config/default-styles';
import {windowWidth} from '../config/utils';

export default function ServiceScreen(props) {
  const {service} = props.route.params;
  console.log(service);

  const renderItem = ({item}) => {
    console.log(item);
    return (
      <View
        style={{
          padding: 20,
          backgroundColor: colors.light_blue,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Card style={{width: 70, height: 70}} />
          <View style={{flexDirection: 'column'}}>
            <AppText
              style={{
                fontFamily: constants.medium,
                fontSize: 13,
                marginStart: 10,
              }}>
              {item.title}
            </AppText>
            <AppText
              style={{
                fontFamily: constants.regular,
                fontSize: 10,
                marginStart: 10,
              }}>
              {'ratings will be updated soon'}
            </AppText>
            <AppText
              style={{
                fontFamily: constants.semiBold,
                fontSize: 10,
                marginStart: 10,
              }}>
              {'₹299'}
            </AppText>
            <AppText
              style={{
                fontFamily: constants.regular,
                fontSize: 10,
                marginStart: 10,
              }}>
              {'🕑 55 min'}
            </AppText>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={(defaultStyles.subTitle, {fontSize: 12})}>Add +</Text>
          </TouchableOpacity>
        </View>
        <AppText
          style={{
            fontSize: 12,
            marginTop: 8,
            fontFamily: constants.medium,
          }}>
          High Touch Point Cleaning
        </AppText>
        <AppText
          style={{
            fontSize: 10,
            fontFamily: constants.regular,
          }}>
          High touch surfaces such as handles, mirrors & fittings are wiped down
          spotless.
        </AppText>
        <AppText
          style={{
            fontSize: 12,
            marginTop: 8,
            fontFamily: constants.medium,
          }}>
          Eleminated build up
        </AppText>
        <AppText
          style={{
            fontSize: 10,
            fontFamily: constants.regular,
          }}>
          Extensive cleaning of all areas helps clear build up of grins &
          scaling. spotless
        </AppText>
        <AppText
          style={{
            fontSize: 12,
            marginTop: 8,
            fontFamily: constants.medium,
          }}>
          Professional Tools & Chemicals
        </AppText>
        <AppText
          style={{
            fontSize: 10,
            fontFamily: constants.regular,
          }}>
          Diversity based chemicals, microfibres, grout brush & putty blades are
          used to free dirt accumulation from in between surfaces.
        </AppText>
      </View>
    );
  };

  const renderHeader = () => {
    return (
      <View style={{paddingStart: 20, paddingEnd: 20, paddingBottom: 8}}>
        <AppText
          style={{
            fontFamily: constants.semiBold,
            fontSize: 17,
          }}>
          Why Professional Cleaning
        </AppText>
        <AppText
          style={{
            fontSize: 12,
          }}>
          Guranteed cleaning, everytime
        </AppText>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={[
            {id: 1, title: 'Cleans in between tiles'},
            {id: 2, title: 'Kills germs & removes stains'},
            {id: 3, title: 'Clear yellow marks'},
            {id: 4, title: 'Removes scaling & water marks'},
          ]}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  margin: 8,
                  width: windowWidth / 2 - 40,
                  height: 180,
                }}>
                <Card
                  style={{
                    height: 160,
                  }}>
                  <Image />
                </Card>
                <AppText
                  style={{
                    fontSize: 12,
                    marginTop: 8,
                    textAlign: 'center',
                  }}>
                  {item.title}
                </AppText>
              </View>
            );
          }}
        />
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View
        style={{
          paddingStart: 20,
          paddingEnd: 20,
          paddingTop: 10,
          marginTop: 12,
          paddingBottom: 20,
          borderTopRightRadius: 16,
          borderTopLeftRadius: 16,
          backgroundColor: '#F3F1F1',
        }}>
        <Text
          style={[
            defaultStyles.subTitle,
            {
              borderRadius: 8,
              borderWidth: 1,
              padding: 12,
              marginTop: 10,
              textAlign: 'center',
              backgroundColor: colors.light_blue,
            },
          ]}>
          Results as good as new
        </Text>
        <Text
          style={[
            defaultStyles.subTitle,
            {
              borderRadius: 8,
              borderWidth: 1,
              padding: 12,
              marginTop: 8,
              textAlign: 'center',
              backgroundColor: colors.light_blue,
            },
          ]}>
          Social Distancing and Maintained
        </Text>
        <Text
          style={[
            defaultStyles.subTitle,
            {
              borderRadius: 8,
              borderWidth: 1,
              padding: 12,
              marginTop: 8,
              textAlign: 'center',
              backgroundColor: colors.light_blue,
            },
          ]}>
          Trained and Verified Professionals
        </Text>
        <Text
          style={[
            defaultStyles.subTitle,
            {
              borderRadius: 8,
              borderWidth: 1,
              padding: 12,
              marginTop: 8,
              textAlign: 'center',
              backgroundColor: colors.light_blue,
            },
          ]}>
          We take care of our customers
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon size={28} name={'arrow-left'} color={colors.primary} />
        </TouchableOpacity>
        <AppText style={styles.headerText}>{service.title}</AppText>
      </View>

      <FlatList
        ListHeaderComponent={renderHeader}
        keyExtractor={(item, index) => index}
        showsVerticalScrollIndicator={false}
        data={service.subServices}
        renderItem={renderItem}
        ListFooterComponent={renderFooter}
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
    color: colors.primary,
    fontFamily: constants.medium,
  },
  button: {
    top: 20,
    end: 8,
    borderWidth: 1,
    borderRadius: 4,
    paddingStart: 8,
    paddingEnd: 8,
    paddingTop: 6,
    paddingBottom: 6,
    position: 'absolute',
    backgroundColor: colors.light_yellow,
  },
});
