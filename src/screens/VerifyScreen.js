import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import AppText from '../components/AppText';
import colors from '../config/colors';
import constants from '../config/constants';
import defaultStyles from '../config/default-styles';
import {authenticate} from '../store/slices/authSlice';

export default function VerifyScreen(props) {
  const {navigation, route} = props;
  const [otp, setOTP] = useState();
  const dispatch = useDispatch();

  async function validateCode() {
    Keyboard.dismiss();
    try {
      await route.params.confirm.confirm(otp);
      dispatch(authenticate());
    } catch (error) {
      // todo to remove
      //dispatch(authenticate());
      console.log('Invalid code' + error);
    }
  }

  return (
    <ImageBackground
      blurRadius={0.2}
      style={styles.background}
      source={require('../assets/images/repair.jpg')}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.goBack()}>
        <Icon size={38} name={'arrow-left'} color={colors.primary} />
      </TouchableOpacity>
      <View style={styles.body}>
        <AppText style={[defaultStyles.subTitle, {fontSize: 18}]}>
          Please enter OTP
        </AppText>
        <TextInput
          style={styles.input}
          value={otp}
          maxLength={6}
          keyboardType={'number-pad'}
          onChangeText={(text) => setOTP(text)}
        />
      </View>
      {!!otp && otp.length === 6 && (
        <TouchableOpacity style={styles.button} onPress={validateCode}>
          <Text style={defaultStyles.subTitle}>Submit</Text>
        </TouchableOpacity>
      )}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'contain',
  },
  header: {
    padding: 10,
  },
  body: {
    marginTop: 10,
    padding: 20,
  },
  input: {
    margin: 60,
    fontSize: 28,
    letterSpacing: 20,
    textAlign: 'center',
    borderBottomWidth: 2,
    fontFamily: constants.semiBold,
    borderBottomColor: colors.primary,
  },
  button: {
    bottom: 12,
    end: 10,
    borderWidth: 1,
    borderRadius: 4,
    flexGrow: 1,
    paddingStart: 12,
    paddingEnd: 12,
    paddingTop: 6,
    paddingBottom: 6,
    position: 'absolute',
    backgroundColor: colors.light_yellow,
  },
});
