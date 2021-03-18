import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import colors from '../config/colors';
import auth from '@react-native-firebase/auth';
import {authenticate, autoLogin} from '../store/slices/authSlice';

const StartupScreen = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const onAuthStateChanged = (user) => {
    if (user) {
      dispatch(
        authenticate({
          token: 'abcd1234',
          userId: '9582296350',
        }),
      );
    } else {
      dispatch(autoLogin());
    }
  };

  return (
    <View style={styles.screen}>
      <ActivityIndicator size="large" color={colors.primary} />
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
