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
import SERVICES from '../data/ServicesData';
import CAROUSELS from '../data/CarouselData';

export default function ServicesScreen(props) {
  const {navigation} = props;
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigation.navigate(routes.Service, {service: item})}>
        <Card style={styles.card}>
          <Image
            style={styles.image}
            resizeMode={'contain'}
            source={item.imageUrl}
          />
          <AppText style={[defaultStyles.subTitle, {textAlign: 'center'}]}>
            {item.title}
          </AppText>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.primary} />
      <TouchableOpacity style={styles.location}>
        <Icon name={'google-maps'} size={18} color={colors.primary} />
        <Text numberOfLines={1} style={styles.locationText}>
          {'Shipra Riviera, Indirapuram, Ghaziabad'}
        </Text>
        <Icon
          name={'arrow-down-drop-circle-outline'}
          size={18}
          color={colors.primary}
        />
      </TouchableOpacity>
      <View style={styles.carousel}>
        <Carousel data={CAROUSELS} />
      </View>
      <View style={styles.body}>
        <AppText style={styles.headerText}>Which service do you need?</AppText>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listItem}
          data={SERVICES}
          renderItem={renderItem}
          numColumns={2}
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
  headerText: {
    fontSize: 16,
    fontFamily: constants.medium,
    color: colors.primary,
    textAlign: 'center',
  },
  location: {
    backgroundColor: colors.light_blue,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    shadowColor: colors.primary,
    shadowOpacity: 0.26,
    shadowRadius: 8,
    elevation: 5,
    shadowOffset: {width: 0, height: 2},
  },
  locationText: {
    paddingStart: 4,
    width: '90%',
    fontSize: 12,
    fontFamily: constants.medium,
  },
  carousel: {
    height: windowHeight / 3.6,
    width: '100%',
    paddingStart: 15,
    paddingEnd: 15,
    paddingTop: 15,
    paddingBottom: 8,
  },
  body: {
    flex: 1,
    paddingStart: 20,
    paddingEnd: 20,
    paddingTop: 10,
    paddingBottom: 20,
    borderTopRightRadius: 28,
    borderTopLeftRadius: 28,
    backgroundColor: '#F3F1F1',
  },
  listItem: {
    alignItems: 'center',
  },
  card: {
    margin: 6,
    width: windowWidth / 2 - 30,
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: windowWidth / 2 - 20,
  },
});
