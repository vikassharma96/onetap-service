import React from 'react';
import {StyleSheet, SafeAreaView, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppText from '../../components/AppText';
import Seperator from '../../components/Seperator';
import colors from '../../config/colors';
import constants from '../../config/constants';

export default function ProfileScreen(props) {
  const {navigation} = props;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon size={28} name={'arrow-left'} color={colors.light_yellow} />
        </TouchableOpacity>
        <AppText style={styles.headerText}>{'My Profile'}</AppText>
      </View>
      <Seperator color={colors.seperator} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  headerText: {
    marginStart: 20,
    fontSize: 18,
    color: colors.light_yellow,
    fontFamily: constants.medium,
  },
});
