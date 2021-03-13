import React, {useState, useEffect, useRef} from 'react';
import {View, StyleSheet, FlatList, Animated} from 'react-native';
import colors from '../config/colors';
import CarouselItem from './CarouselItem';

import {windowWidth} from '../config/utils';

function infiniteScroll(dataList, mySlide) {
  const numberOfData = dataList.length;
  let scrollValue = 0,
    scrolled = 0;

  setInterval(function () {
    scrolled++;
    if (scrolled < numberOfData) scrollValue = scrollValue + windowWidth;
    else {
      scrollValue = 0;
      scrolled = 0;
    }
    try {
      if (mySlide && mySlide.current) {
        mySlide.current.scrollToOffset({
          animated: true,
          offset: scrollValue,
        });
      }
    } catch (e) {
      console.log('slider error!', e);
    }
  }, 3000);
}

const Carousel = ({data}) => {
  console.log('data...', data);
  const mySlide = useRef();

  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, windowWidth);
  const [dataList, setDataList] = useState(data);

  useEffect(() => {
    // setDataList(data);
    infiniteScroll(dataList, mySlide);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        ref={mySlide}
        keyExtractor={(item, index) => 'key' + index}
        horizontal
        pagingEnabled
        scrollEnabled
        snapToAlignment="center"
        scrollEventThrottle={16}
        decelerationRate={'fast'}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return <CarouselItem imageUrl={item.imageUrl} />;
        }}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
      />

      <View style={styles.dotView}>
        {data.map((_, i) => {
          let opacity = position.interpolate({
            inputRange: [i - 1, i, i + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={i}
              style={{
                opacity,
                height: 8,
                width: 8,
                backgroundColor: colors.primary,
                margin: 5,
                borderRadius: 4,
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  dotView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 8,
    margin: 5,
    alignSelf: 'center',
  },
});

export default Carousel;
