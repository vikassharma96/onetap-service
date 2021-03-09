import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import defaultStyles from '../config/default-styles';
import strings from '../config/strings';
import colors from '../config/colors';

const AuthScreen = (props) => {
  const pages = [
    {
      data: strings.page1,
      color: colors.light_blue,
    },
    {
      data: strings.page2,
      color: colors.light_green,
    },
    {
      data: strings.page3,
      color: colors.light_yellow,
    },
  ];
  return (
    <View style={styles.container}>
      <ViewPager
        style={styles.viewPager}
        initialPage={0}
        keyboardDismissMode={'on-drag'}>
        {pages.map((page, index) => {
          return <Page key={index} data={page.data} color={page.color} />;
        })}
      </ViewPager>
      <View style={styles.input}></View>
    </View>
  );
};

const Page = ({data, color}) => {
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: color,
      }}>
      <Text style={[defaultStyles.title, styles.page]}>{data}</Text>
      <MaterialCommunityIcons
        style={{
          height: '20%',
          textAlign: 'center',
          textAlignVertical: 'center',
        }}
        color={colors.primary}
        name="checkbox-multiple-marked-circle-outline"
        size={78}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewPager: {
    flex: 0.7,
  },
  page: {
    height: '80%',
    textAlign: 'center',
    marginStart: 20,
    marginEnd: 20,
    textAlignVertical: 'center',
  },
  input: {
    flex: 0.3,
  },
});

export default AuthScreen;
