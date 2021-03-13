import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import AuthNavigator from './AuthNavigator';
import {MainNavigator} from './MainNavigator';

const AppNavigator = () => {
  const isAuth = useSelector((state) => !!state.auth.loggedIn);
  console.log('isAuth', isAuth);
  return (
    <NavigationContainer>
      {!isAuth && <AuthNavigator />}
      {isAuth && <MainNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
