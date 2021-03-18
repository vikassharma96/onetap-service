import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../config/utils';

const CarouselItem = ({imageUrl}) => {
  return <Image style={styles.image} source={imageUrl} />;
};

const styles = StyleSheet.create({
  image: {
    height: windowHeight * 0.3,
    width: windowWidth,
    resizeMode: 'cover',
    overflow: 'hidden',
  },
});

export default CarouselItem;
