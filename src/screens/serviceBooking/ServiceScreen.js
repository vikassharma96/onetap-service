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
import {useDispatch, useSelector} from 'react-redux';
import AppText from '../../components/AppText';
import Seperator from '../../components/Seperator';
import colors from '../../config/colors';
import constants from '../../config/constants';
import defaultStyles from '../../config/default-styles';
import {windowHeight, windowWidth} from '../../config/utils';
import BENEFITS from '../../data/BenefitsData';
import routes from '../../routes/routes';
import {addItemToCart} from '../../store/slices/cartSlice';

export default function ServiceScreen(props) {
  const {service} = props.route.params;

  const {items: cartItems} = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddToCart = async (item, inCart) => {
    if (inCart) {
      props.navigation.navigate(routes.Cart, {
        serviceId: service.id,
      });
      return;
    }
    await dispatch(addItemToCart({...item, serviceId: service.id}));
  };

  const renderItem = ({item}) => {
    const filteredCartItem = cartItems.filter(
      (cartItem) => cartItem.id === item.id,
    );
    const inCart = filteredCartItem.length > 0;
    return (
      <View style={styles.listItemContainer}>
        <View style={styles.listItemMain}>
          <Card style={styles.listItemCard} />
          <View style={styles.listItemView}>
            <AppText style={styles.listTitle}>{item.title}</AppText>
            <AppText style={styles.listImage}>{item.ratings}</AppText>
            <AppText style={styles.listPrice}>₹{item.price}</AppText>
            <AppText style={styles.listTime}>
              {`🕑 ${item.serviceTime}`}
            </AppText>
          </View>
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: inCart
                  ? colors.light_grey
                  : colors.light_yellow,
              },
            ]}
            // disabled={inCart}
            onPress={handleAddToCart.bind(this, item, inCart)}>
            <Text style={(defaultStyles.subTitle, {fontSize: 11})}>
              {inCart ? 'Go to Cart' : 'Add to Cart'}
            </Text>
          </TouchableOpacity>
        </View>
        {item.description.map((row, index) => {
          return (
            <View key={index.toString()}>
              <AppText style={styles.description}>{row.type}</AppText>
              <AppText style={styles.descriptionText}>
                {row.explanation}
              </AppText>
            </View>
          );
        })}
      </View>
    );
  };

  const renderHeader = () => {
    return (
      <View
        style={{
          paddingStart: 20,
          marginTop: 8,
          paddingEnd: 20,
          paddingBottom: 8,
        }}>
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
            {
              id: 1,
              title: 'Cleans in between tiles',
              imageUrl: require('../../assets/images/clean_between_tiles.jpg'),
            },
            {
              id: 2,
              title: 'Kills germs & removes stains',
              imageUrl: require('../../assets/images/kill_germs.jpg'),
            },
            {
              id: 3,
              title: 'Clear yellow marks',
              imageUrl: require('../../assets/images/yellow_marks.jpg'),
            },
            {
              id: 4,
              title: 'Removes scaling & water marks',
              imageUrl: require('../../assets/images/removes_water.jpg'),
            },
          ]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  margin: 8,
                  width: windowWidth * 0.4,
                  height: windowHeight * 0.275,
                }}>
                <Image
                  style={{
                    width: '100%',
                    height: '90%',
                    borderRadius: 3,
                  }}
                  source={item.imageUrl}
                  resizeMode={'cover'}
                />
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
      <View style={styles.footer}>
        {BENEFITS.map((item, index) => {
          return (
            <View key={index} style={styles.footerItem}>
              <Image source={require('../../assets/images/ic_check.png')} />
              <Text style={[defaultStyles.subTitle, {marginStart: 12}]}>
                {item.benefit}
              </Text>
            </View>
          );
        })}
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
      <Seperator color={colors.seperator} />
      <FlatList
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        data={service.subCategory}
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
  },
  listItemContainer: {
    padding: 20,
    backgroundColor: colors.light_blue,
  },
  listItemMain: {
    flexDirection: 'row',
  },
  listItemCard: {
    width: 70,
    height: 70,
  },
  listItemView: {
    flexDirection: 'column',
  },
  listTitle: {
    fontFamily: constants.medium,
    fontSize: 13,
    marginStart: 10,
  },
  listImage: {
    fontFamily: constants.regular,
    fontSize: 10,
    marginStart: 10,
  },
  listPrice: {
    fontFamily: constants.semiBold,
    fontSize: 10,
    marginStart: 10,
  },
  listTime: {
    fontFamily: constants.regular,
    fontSize: 10,
    marginStart: 10,
  },
  description: {
    fontSize: 12,
    marginTop: 8,
    fontFamily: constants.medium,
  },
  descriptionText: {
    fontSize: 10,
    fontFamily: constants.regular,
  },
  footer: {
    paddingStart: 20,
    paddingEnd: 20,
    paddingTop: 10,
    marginTop: 12,
    paddingBottom: 20,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    backgroundColor: '#F3F1F1',
  },
  footerItem: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
