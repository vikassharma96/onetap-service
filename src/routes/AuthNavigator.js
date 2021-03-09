import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthScreen from '../screens/AuthScreen';
import routes from './routes';

const AuthStackNavigator = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStackNavigator.Screen name={routes.Auth} component={AuthScreen} />
    </AuthStackNavigator.Navigator>
  );
};

export default AuthNavigator;
