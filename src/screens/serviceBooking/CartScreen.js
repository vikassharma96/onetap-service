import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import AppText from '../../components/AppText';
import Seperator from '../../components/Seperator';
import {StackActions} from '@react-navigation/native';
import colors from '../../config/colors';
import constants from '../../config/constants';
import defaultStyles from '../../config/default-styles';
import {windowHeight, windowWidth} from '../../config/utils';
import Snackbar from 'react-native-snackbar';
import {formatDate} from '../../config/utils';
import {emptyCart, removeFromCart} from '../../store/slices/cartSlice';
import {placeOrder} from '../../store/slices/orderSlice';

export default function CartScreen(props) {
  const {navigation, route} = props;
  const {items: cartItems} = useSelector((state) => state.cart);
  const currentServices = cartItems.filter(
    (cartItem) => cartItem.serviceId === route.params.serviceId,
  );
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  console.log('currentServices', currentServices);

  const dispatch = useDispatch();

  const handleRemoveFromCart = async (currentServiceId) => {
    console.log('called', currentServiceId);
    await dispatch(removeFromCart(currentServiceId));
  };

  const totalPrice =
    Math.round(
      (currentServices.reduce(
        (total, service) => total + Number(service.price),
        0,
      ) +
        Number.EPSILON) *
        100,
    ) / 100;

  const handlePlaceOrder = async () => {
    setIsOrderPlaced(true);
    Snackbar.show({
      text: 'Your booking is Confirmed!',
      duration: Snackbar.LENGTH_SHORT,
      fontFamily: constants.regular,
    });
    await dispatch(emptyCart());
    let orderInfo = {
      orderNo: Date.now(),
      orderedOn: formatDate(),
      status: 'In Process',
      total: totalPrice,
      services: currentServices,
    };
    await dispatch(placeOrder(orderInfo));
    setTimeout(() => {
      const popAction = StackActions.popToTop();
      navigation.dispatch(popAction);
    }, 1000);
  };

  if (isOrderPlaced) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon size={28} name={'arrow-left'} color={colors.primary} />
          </TouchableOpacity>
          <AppText style={styles.headerText}>{'My Cart'}</AppText>
        </View>
        <Seperator color={colors.seperator} />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={'large'} color={colors.primary} />
          <Text style={{fontFamily: constants.regular}}>Please wait...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon size={28} name={'arrow-left'} color={colors.primary} />
        </TouchableOpacity>
        <AppText style={styles.headerText}>{'My Cart'}</AppText>
      </View>
      <Seperator color={colors.seperator} />
      {currentServices.map((service) => {
        return (
          <View
            key={service.id}
            style={{
              padding: 20,
            }}>
            <AppText
              style={[
                defaultStyles.subTitle,
                {
                  fontSize: 15,
                },
              ]}>
              {service.title}
            </AppText>
            <View style={{marginTop: 8, flexDirection: 'row'}}>
              <Card style={{height: 50, width: 50}} />
              <View
                style={{
                  marginStart: 8,
                  width: '70%',
                  flexDirection: 'column',
                }}>
                <AppText style={([defaultStyles.text], {fontSize: 10})}>
                  {
                    'Monthly essential cleaning, wash basin, geyser & exhaust fan'
                  }
                </AppText>
                <AppText
                  style={[
                    defaultStyles.bodyText,
                    {
                      fontSize: 10,
                    },
                  ]}>
                  • {service.ratings}
                </AppText>
                <AppText
                  style={[
                    defaultStyles.bodyText,
                    {
                      fontSize: 10,
                    },
                  ]}>
                  • ₹{service.price}
                </AppText>
                <AppText
                  style={[
                    defaultStyles.bodyText,
                    {
                      fontSize: 10,
                    },
                  ]}>
                  • 🕑 {service.serviceTime}
                </AppText>
              </View>
              <TouchableOpacity
                onPress={() => handleRemoveFromCart(service.id)}
                style={{
                  alignSelf: 'center',
                  justifyContent: 'flex-end',
                }}>
                <Image source={require('../../assets/images/ic_delete.png')} />
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
      {currentServices.length === 0 ? (
        <View
          style={{
            flex: 0.9,
            justifyContent: 'center',
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
                color={colors.primary}
              />
              <AppText
                style={{
                  textAlign: 'center',
                  marginTop: 12,
                }}>
                {'You don’t have any service in your cart.'}
              </AppText>
            </View>
          </Card>
        </View>
      ) : (
        <View
          style={{
            marginStart: 12,
            marginEnd: 12,
          }}>
          <Seperator color={colors.faded_grey} />
          <View style={{padding: 12}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <AppText
                style={{
                  fontFamily: constants.regular,
                  fontSize: 12,
                }}>
                Item Total
              </AppText>
              <AppText
                style={{
                  fontFamily: constants.medium,
                  fontSize: 12,
                }}>
                ₹{totalPrice}
              </AppText>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <AppText
                style={{
                  fontFamily: constants.regular,
                  fontSize: 12,
                }}>
                Safety and support fee
              </AppText>
              <AppText
                style={{
                  fontFamily: constants.medium,
                  fontSize: 12,
                }}>
                ₹{39}
              </AppText>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <AppText
                style={{
                  fontFamily: constants.regular,
                  fontSize: 12,
                }}>
                Initial discount
              </AppText>
              <AppText
                style={{
                  fontFamily: constants.medium,
                  fontSize: 12,
                }}>
                ₹{39}
              </AppText>
            </View>
          </View>
          <Seperator color={colors.faded_grey} />
          <View
            style={{
              padding: 12,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <AppText
              style={{
                fontFamily: constants.semiBold,
                fontSize: 14,
              }}>
              Total
            </AppText>
            <View
              style={{
                alignItems: 'flex-end',
              }}>
              <AppText
                style={{
                  fontFamily: constants.semiBold,
                  fontSize: 14,
                }}>
                ₹{totalPrice}
              </AppText>
              <AppText
                style={{
                  fontSize: 10,
                  fontFamily: constants.regular,
                  color: colors.accent,
                }}>
                You're saving ₹39
              </AppText>
            </View>
          </View>
        </View>
      )}
      {currentServices.length !== 0 && (
        <TouchableOpacity style={styles.checkout} onPress={handlePlaceOrder}>
          <AppText
            style={[
              defaultStyles.bodyText,
              {
                color: 'white',
              },
            ]}>
            Please confirm your booking
          </AppText>
        </TouchableOpacity>
      )}
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
  checkout: {
    height: 50,
    borderRadius: 26,
    position: 'absolute',
    bottom: '4%',
    alignItems: 'center',
    justifyContent: 'center',
    right: '15%',
    left: '15%',
    elevation: 8,
    shadowColor: colors.light_grey,
    backgroundColor: colors.primary,
  },
});
