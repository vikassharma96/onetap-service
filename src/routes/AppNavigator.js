import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import AuthNavigator from './AuthNavigator';
import {MainNavigator} from './MainNavigator';
import StartupScreen from '../screens/StartupScreen';

const AppNavigator = () => {
  const {uid: isAuth, tryAutoLogin} = useSelector((state) => state.auth);
  return (
    <NavigationContainer>
      {isAuth && <MainNavigator />}
      {!isAuth && tryAutoLogin && <AuthNavigator />}
      {!isAuth && !tryAutoLogin && <StartupScreen />}
    </NavigationContainer>
  );
};

export default AppNavigator;
