import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import colors from '../config/colors';
import {authenticate, autoLogin} from '../store/slices/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import constants from '../config/constants';
import strings from '../config/strings';

const StartupScreen = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const tryLogin = async () => {
      const user = await AsyncStorage.getItem('user');
      if (!user) {
        dispatch(autoLogin());
        return;
      }
      dispatch(authenticate(JSON.parse(user)));
    };
    tryLogin();
  }, [dispatch]);

  return (
    <View style={styles.screen}>
      <ActivityIndicator size="large" color={colors.primary} />
      <Text style={{fontFamily: constants.regular}}>{strings.pleaseWait}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StartupScreen;
