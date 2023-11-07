import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";

export default function Perfil() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <View style={styles.body}>

        <View style={styles.cima}>
          <Text style={styles.textoTitulo}> Meu Perfil </Text>
          <Ionicons name='person-outline' size={55} color={'#ffa500'}/>
        </View>

        <View style={styles.meio}>

          <View style={styles.viewNomeInput}> 
            <Text>Nome</Text>
            <Text>Sobrenome</Text>
            <Text>Email</Text>
            <Text>CPF</Text>
            <Text>Senha</Text>
          </View>
          <View style={styles.viewInput}>
            <TextInput placeholder='Nome' style={styles.input}/>
            <TextInput placeholder='Sobrenome' style={styles.input}/>
            <TextInput placeholder='Email' style={styles.input}/>
            <TextInput placeholder='CPF' style={styles.input}/>
            <TextInput placeholder='Senha' style={styles.input}/>
          </View>

        </View>

        <View style={styles.baixo}>
        <TouchableOpacity style={styles.botaoAdd}>
          <Text>EDITAR DADOS</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ListasSalvas')} style={styles.botaoAdd}>
          <Text>MINHAS LISTAS</Text>
        </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.footer}>
      </View>
  
      <StatusBar style="auto" />
    </View>
    
  );
}

