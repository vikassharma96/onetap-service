import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';
import constants from '../config/constants';

export default function ServiceScreen(props) {
  const {route, navigation} = props;
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={{padding: 10}}
        onPress={() => navigation.goBack()}>
        <Icon size={28} name={'arrow-left'} color={colors.primary} />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 18,
          textAlign: 'center',
          fontFamily: constants.medium,
        }}>
        {route.params.item.name}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
