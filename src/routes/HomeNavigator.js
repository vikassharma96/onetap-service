import React from 'react';
import {Platform, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import colors from '../config/colors';
import constants from '../config/constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import routes from './routes';
import ServicesScreen from '../screens/ServicesScreen';
import ServiceScreen from '../screens/ServiceScreen';
import CartScreen from '../screens/CartScreen';

const Stack = createStackNavigator();

const HomeNavigator = (props) => {
  return (
    <Stack.Navigator
      initialRouteName={routes.Categories}
      headerMode
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.Services} component={ServicesScreen} />
      <Stack.Screen name={routes.Service} component={ServiceScreen} />
      <Stack.Screen name={routes.Cart} component={CartScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
