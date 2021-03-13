import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import AuthNavigator from './AuthNavigator';
import {HomeNavigator} from './HomeNavigator';

const AppNavigator = () => {
  const isAuth = useSelector((state) => !!state.auth.loggedIn);
  console.log('isAuth', isAuth);
  return (
    <NavigationContainer>
      {!isAuth && <AuthNavigator />}
      {isAuth && <HomeNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
