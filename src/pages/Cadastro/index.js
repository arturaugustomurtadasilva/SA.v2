import { StatusBar } from 'expo-status-bar';
import { Text, View,TextInput, } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { styles } from './styles'
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export default function Cadastro() {
  const [titulo, setTitulo] = useState('')
  const [genero, setGenero] = useState('')
  const [tamanhoLista, setTamanhoLista] = useState('')
  const [desconto, setDesconto] = useState('')

  function addLista(){
    const listaTemp = {
      
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.body}>

        <View style={styles.cima}>
          <Text style={styles.textoTitulo}> Cadastro de Lista </Text>
          <Ionicons name='create-outline' size={55} color={'#ffa500'}/>
        </View>

        <View style={styles.meio}>

          <View style={styles.viewNomeInput}> 
            <Text>Título</Text>
            <Text>Gênero</Text>
            <Text>Vagas</Text>
            <Text>Desconto</Text>
            
          </View>
          <View style={styles.viewInput}>
            <TextInput placeholder='Título' style={styles.input}/>
            <TextInput placeholder='Gênero' style={styles.input}/>
            <TextInput placeholder='Vagas' style={styles.input}/>
            <TextInput placeholder='Desconto' style={styles.input}/>
            
          </View>

        </View>

        <View style={styles.baixo}>
          <TouchableOpacity style={styles.btnCriar}>
            <Text>Criar</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.footer}>
      </View>
  
      <StatusBar style="auto" />
    </View>
  );
}

