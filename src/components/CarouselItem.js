import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {windowWidth} from '../config/utils';

const CarouselItem = ({imageUrl}) => {
  return <Image style={styles.image} source={imageUrl} />;
};

const styles = StyleSheet.create({
  image: {
    width: windowWidth,
    height: '100%',
    resizeMode: 'stretch',
  },
});

export default CarouselItem;
