import React from 'react';
import {Text, Platform, SafeAreaView, View} from 'react-native';
import colors from '../config/colors';
import constants from '../config/constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import routes from './routes';
import HomeNavigator from './HomeNavigator';
import OrdersScreen from '../screens/serviceBooking/OrdersScreen';
import ProfileScreen from '../screens/user/ProfileScreen';

const TabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const tabProps = Platform.select({
  android: {
    activeColor: colors.white,
    shifting: true,
  },
  ios: {
    tabBarOptions: {
      activeTintColor: colors.accent,
      labelStyle: {
        fontFamily: constants.semiBold,
      },
    },
  },
});

export const MainNavigator = () => {
  // const dispatch = useDispatch();

  return (
    <TabNavigator.Navigator {...tabProps} backBehavior="initialRoute">
      <TabNavigator.Screen
        name={routes.Home}
        component={HomeNavigator}
        options={({route}) => ({
          tabBarIcon: ({color, focused}) => (
            <Icon color={color} size={24} name="home-outline" />
          ),
          tabBarColor: colors.primary,
          tabBarLabel: (
            <Text style={{fontFamily: constants.semiBold}}>Home</Text>
          ),
        })}
      />
      <TabNavigator.Screen
        name={routes.Orders}
        component={OrdersScreen}
        options={({route}) => ({
          tabBarIcon: ({color, focused}) => (
            <Icon color={color} size={24} name="order-bool-ascending-variant" />
          ),
          tabBarColor: colors.accent,
          tabBarLabel: (
            <Text style={{fontFamily: constants.semiBold}}>Orders</Text>
          ),
        })}
      />
      <TabNavigator.Screen
        name={routes.Profile}
        component={ProfileScreen}
        options={({route}) => ({
          tabBarIcon: ({color, focused}) => (
            <Icon color={color} size={24} name="account-check-outline" />
          ),
          tabBarColor: colors.light_yellow,
          tabBarLabel: (
            <Text style={{fontFamily: constants.semiBold}}>Profile</Text>
          ),
        })}
      />
    </TabNavigator.Navigator>
  );
};
