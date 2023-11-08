import React, { useRef } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { StyleSheet } from 'react-native';


const Carrossel = () => {
  const swiperRef = useRef(null);

  const avancar = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(1, true);
    }''
  }

  const retroceder = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(-1, true);
    }
  }

  return (
    <View>
      <Swiper ref={swiperRef}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 25,marginBottom:5}}>Bem vindo ao MYBO!</Text>
          <Text style={{fontSize:18 ,marginBottom:5}}>Um app criado para te ajudar a comprar o que você quer,</Text>
          <Text style={{fontSize:18}}>mas de um jeito diferente, deixa eu te mostrar!</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Página 2</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Página 3</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Aperte em seguir para realizer seu cadastro!</Text>
        </View>
      </Swiper>
      <View style={{alignItems:'center',justifyContent:'center',gap:8,flex:0.3}}>
        <TouchableOpacity onPress={avancar} style={styles.buttonNav}>
            <Text>Avançar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={retroceder} style={styles.buttonNav}>
            <Text>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    buttonNav:{
        borderWidth:1,
        width:'35%',
        height:'25%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        borderColor:'#ffa550'
    }
  });
export default Carrossel;
