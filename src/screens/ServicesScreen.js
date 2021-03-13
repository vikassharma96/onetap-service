import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ImageBackground,
} from 'react-native';
import colors from '../config/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import constants from '../config/constants';
import Carousel from '../components/Carousel';
import {windowHeight, windowWidth} from '../config/utils';
import Card from '../components/Card';
import AppText from '../components/AppText';
import defaultStyles from '../config/default-styles';
import routes from '../routes/routes';

export default function ServicesScreen(props) {
  const {navigation} = props;
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigation.navigate(routes.Service, {item})}>
        <Card
          style={{
            margin: 6,
            width: windowWidth / 2 - 30,
            alignItems: 'center',
          }}>
          <Image
            style={{
              height: 100,
              width: windowWidth / 2 - 20,
            }}
            resizeMode={'contain'}
            source={item.imageUrl}
          />
          <AppText style={[defaultStyles.subTitle, {textAlign: 'center'}]}>
            {item.name}
          </AppText>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.primary} />
      <TouchableOpacity
        style={{
          backgroundColor: colors.light_blue,
          flexDirection: 'row',
          alignItems: 'center',
          padding: 8,
          shadowColor: colors.primary,
          shadowOpacity: 0.26,
          shadowRadius: 8,
          elevation: 5,
          shadowOffset: {width: 0, height: 2},
        }}>
        <Icon name={'google-maps'} size={18} color={colors.primary} />
        <Text
          numberOfLines={1}
          style={{
            paddingStart: 4,
            width: '90%',
            fontSize: 12,
            fontFamily: constants.medium,
          }}>
          {'Shipra Riviera, Indirapuram, Ghaziabad'}
        </Text>
        <Icon
          name={'arrow-down-drop-circle-outline'}
          size={18}
          color={colors.primary}
        />
      </TouchableOpacity>
      <View
        style={{
          height: windowHeight / 3.6,
          width: '100%',
          paddingStart: 15,
          paddingEnd: 15,
          paddingTop: 15,
          paddingBottom: 8,
        }}>
        <Carousel
          data={[
            {id: 1, imageUrl: require('../assets/images/repair.jpg')},
            {id: 1, imageUrl: require('../assets/images/repair.jpg')},
            {id: 1, imageUrl: require('../assets/images/repair.jpg')},
          ]}
        />
      </View>
      <View
        style={{
          flex: 1,
          paddingStart: 20,
          paddingEnd: 20,
          paddingTop: 10,
          paddingBottom: 20,
          borderTopRightRadius: 28,
          borderTopLeftRadius: 28,
          backgroundColor: '#F3F1F1',
        }}>
        <AppText
          style={{
            fontSize: 16,
            fontFamily: constants.medium,
            color: colors.primary,
            textAlign: 'center',
          }}>
          Which service do you need?
        </AppText>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{alignItems: 'center'}}
          data={[
            {
              id: 1,
              name: 'Cleaning Service',
              imageUrl: require('../assets/images/cleaning.jpg'),
            },
            {
              id: 2,
              name: 'AC Repair Service',
              imageUrl: require('../assets/images/acrepair.jpeg'),
            },
            {
              id: 3,
              name: 'Electrician',
              imageUrl: require('../assets/images/electrician.jpeg'),
            },
            {
              id: 4,
              name: 'Plumber',
              imageUrl: require('../assets/images/plumber.jpeg'),
            },
          ]}
          renderItem={renderItem}
          // ItemSeparatorComponent={() => <View style={{marginTop: 8}}></View>}
          numColumns={2}
          // style={{paddingBottom: 10}}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
