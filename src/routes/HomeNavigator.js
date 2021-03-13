import React from 'react';
import {Button, Platform, SafeAreaView, View} from 'react-native';
import colors from '../config/colors';
import constants from '../config/constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import routes from './routes';
import HomeScreen from '../screens/HomeScreen';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? colors.primary : '',
  },
  headerTitleStyle: {
    fontFamily: constants.bold,
  },
  headerBackTitleStyle: {
    fontFamily: constants.regular,
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : colors.primary,
};

const TabNavigator = createBottomTabNavigator();

const tabProps = Platform.select({
  android: {
    activeColor: colors.white,
    shifting: true,
  },
  ios: {
    tabBarOptions: {
      activeTintColor: colors.accentColor,
      labelStyle: {
        fontFamily: constants.semiBold,
      },
    },
  },
});

export const HomeNavigator = () => {
  // const dispatch = useDispatch();

  return (
    <TabNavigator.Navigator {...tabProps}>
      <TabNavigator.Screen
        name={routes.Home}
        component={HomeScreen}
        options={{
          drawerLabel: 'Products',
          drawerIcon: ({color, size}) => (
            <Icon color={color} name="cart" size={size} />
          ),
        }}
      />
    </TabNavigator.Navigator>
  );
};
