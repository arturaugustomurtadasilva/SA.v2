import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { styles } from './styles'
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";

function mudar(){

}

function irConf() {
  
}

export default function Perfil() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View style={styles.textoDePefil}>
          <Text style={styles.textoH1}>Perfil</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.parteCima}>
          <View style={styles.logUm}>
            <FontAwesome
            name='user'
            size={100}
            color='white'
          />
          </View>
          <View style={styles.tituloH1}>
            <Text style={styles.escritoH2}>Informações pessoais</Text>
          </View>
        </View>
        <View style={styles.meio}>
          <View style={styles.linhas}>
            <View style={styles.viewTextTipo}>
              <Text style={styles.textoTipo}>Nome:</Text>
            </View>
            <View style={styles.viewInpt}>
              <TextInput style={styles.input} placeholder='Alexandros'>
              
              </TextInput>
            </View>
          </View>
          <View style={styles.linhas}>
            <View style={styles.viewTextTipo}>
              <Text style={styles.textoTipo}>CPF:</Text>
            </View>
            <View style={styles.viewInpt}>
              <TextInput style={styles.input} placeholder='2222222-22'>
              
              </TextInput>
            </View>
          </View>
          <View style={styles.linhas}>
            <View style={styles.viewTextTipo}>
              <Text style={styles.textoTipo}>Endereço:</Text>
            </View>
            <View style={styles.viewInpt}>
              <TextInput style={styles.input} placeholder='Rua do Senai 1673'>
              
              </TextInput>
            </View>
          </View>
          <View style={styles.linhas}>
            <View style={styles.viewTextTipo}>
              <Text style={styles.textoTipo}>Telefone:</Text>
            </View>
            <View style={styles.viewInpt}>
              <TextInput style={styles.input} placeholder='489846969'>

              </TextInput>
            </View>
          </View>
          <View style={styles.linhas}>
            <View style={styles.viewTextTipo}>
              <Text style={styles.textoTipo}>E-mail:</Text>
            </View>
            <View style={styles.viewInpt}>
              <TextInput style={styles.input} placeholder='elefantePreto@gmail.com'>
              
              </TextInput>
            </View>
          </View>
        </View>
        <View style={styles.baixo}>
          
            <TouchableOpacity onPress={mudar} style={styles.botaoAdd}>
              <Text>EDITAR DADOS</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ListasSalvas')} style={styles.botaoAdd}>
              <Text>MINHAS LISTAS</Text>
            </TouchableOpacity>

        </View>
      </View>
      <View style={styles.footer}>

      </View>
      </View>
    
  );
}

{/* <View style={styles.}></View>
<View style={styles.}></View>
<View style={styles.}></View>
<View style={styles.}></View>
<View style={styles.}></View>
<View style={styles.}></View>
<View style={styles.}></View> */}