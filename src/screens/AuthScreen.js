import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Keyboard,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import colors from '../config/colors';
import LottieView from 'lottie-react-native';
import strings from '../config/strings';
import defaultStyles from '../config/default-styles';
import {windowWidth, windowHeight} from '../config/utils';
import constants from '../config/constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import routes from '../routes/routes';

export default function AuthScreen(props) {
  const {navigation} = props;
  const [inFocus, setInFocus] = useState(false);
  const [number, setNumber] = useState();

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', onKeyboardShow);
    Keyboard.addListener('keyboardDidHide', onKeyboardHide);
    return () => {
      Keyboard.removeListener('keyboardDidShow', onKeyboardShow);
      Keyboard.removeListener('keyboardDidHide', onKeyboardHide);
    };
  }, []);

  const onKeyboardShow = () => {
    setInFocus(true);
  };

  const onKeyboardHide = () => {
    setInFocus(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.light_blue} />
      <View style={styles.animate}>
        {inFocus ? (
          <View style={styles.outline}>
            <Text style={[defaultStyles.subTitle, styles.text]}>
              {strings.intro2}
            </Text>
            <Text style={[defaultStyles.subTitle, styles.text]}>
              {strings.intro1}
            </Text>
          </View>
        ) : (
          <>
            <LottieView
              autoPlay
              loop
              style={{height: windowHeight * 0.4}}
              source={require('../assets/animations/services.json')}
            />
            <Text style={[defaultStyles.subTitle, styles.text]}>
              {strings.intro1}
            </Text>
          </>
        )}
      </View>
      <View style={styles.bottomSheet}>
        <Text style={[defaultStyles.subTitle]}>{strings.mobileNo}</Text>
        <View style={styles.input}>
          <View style={styles.countryCode}>
            <Icon color={colors.primary} size={32} name={'flag-outline'} />
            <Text style={defaultStyles.title}>+91</Text>
          </View>
          <TextInput
            maxLength={10}
            value={number}
            onChangeText={(text) => setNumber(text)}
            style={styles.textInput}
            keyboardType={'number-pad'}
            placeholder={'Mobile Number'}
            placeholderTextColor={colors.grey}
          />
        </View>
        {!!number && number.trim().length < 10 && (
          <Text style={[defaultStyles.subTitle, styles.error]}>
            {strings.mobileValidate}
          </Text>
        )}
        {!!number && number.trim().length === 10 && !inFocus && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(routes.Verify)}>
            <Text style={defaultStyles.subTitle}>Continue</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  animate: {
    flex: 0.7,
    width: windowWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outline: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: colors.light_green,
  },
  text: {
    textAlign: 'center',
    padding: 10,
  },
  bottomSheet: {
    flex: 0.3,
    padding: 20,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    shadowColor: colors.light_grey,
    shadowOpacity: 0.26,
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: colors.light_blue,
    shadowOffset: {width: 0, height: 2},
  },
  countryCode: {
    borderWidth: 1,
    height: 40,
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
  },
  error: {
    color: colors.orange_red,
    fontSize: 12,
  },
  input: {
    height: 60,
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textInput: {
    padding: 8,
    fontSize: 15,
    marginStart: 5,
    borderWidth: 1,
    flexGrow: 1,
    letterSpacing: 2,
    borderRadius: 5,
    alignItems: 'center',
    fontFamily: constants.medium,
  },
  button: {
    bottom: 12,
    end: 10,
    borderWidth: 1,
    borderRadius: 4,
    flexGrow: 1,
    padding: 6,
    position: 'absolute',
    backgroundColor: colors.light_yellow,
  },
});
