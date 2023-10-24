import React from 'react';
import { View, Text } from 'react-native';
import Swiper from 'react-native-swiper';

const ScrollTutorial = () => {
  return (
    <Swiper>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Página 1</Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Página 2</Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Página 3</Text>
      </View>
    </Swiper>
  );
}

export default ScrollTutorial;