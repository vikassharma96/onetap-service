import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthScreen from '../screens/user/AuthScreen';
import VerifyScreen from '../screens/user/VerifyScreen';
import routes from './routes';

const AuthStackNavigator = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStackNavigator.Screen name={routes.Auth} component={AuthScreen} />
      <AuthStackNavigator.Screen
        name={routes.Verify}
        component={VerifyScreen}
      />
    </AuthStackNavigator.Navigator>
  );
};

export default AuthNavigator;
