import React from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../config/colors';

const Seperator = ({color}) => {
  let borderColor = color || colors.seperator;
  return <View style={[styles.seperator, {borderColor: borderColor}]} />;
};

const styles = StyleSheet.create({
  seperator: {
    borderWidth: 1,
    borderTopColor: colors.white,
  },
});

export default Seperator;
