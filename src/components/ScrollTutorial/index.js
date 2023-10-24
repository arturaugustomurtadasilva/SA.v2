import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const ScrollTutorial = () => {
  const textos = [
    'Texto de Introdução 1',
    'Texto de Introdução 2',
    'Texto de Introdução 3',
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.texto}>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        data={textos}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={300}
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ScrollTutorial;