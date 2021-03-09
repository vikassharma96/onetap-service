import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import AuthNavigator from './AuthNavigator';

const AppNavigator = () => {
  const isAuth = useSelector((state) => !!state.auth.userId);
  return (
    <NavigationContainer>{!isAuth && <AuthNavigator />}</NavigationContainer>
  );
};

export default AppNavigator;
