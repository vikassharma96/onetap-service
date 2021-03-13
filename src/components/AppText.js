import React from 'react';
import {Text} from 'react-native';
import defaultStyles from '../config/default-styles';

function AppText({children, style, ...otherProps}) {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
}

export default AppText;
