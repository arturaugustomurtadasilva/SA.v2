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
    const listas = []

    const listaTemp = {
      titulo:  titulo,
      genero: genero,
      tamanhoLista: tamanhoLista,
      desconto: desconto,
    }

    listas.push(listaTemp)

    console.log(listas)
  }

  function feed(){
    
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
            <TextInput value={titulo} onChangeText={setTitulo} placeholder='Título' style={styles.input}/>
            <TextInput value={genero} onChangeText={setGenero} placeholder='Gênero' style={styles.input}/>
            <TextInput value={tamanhoLista} onChangeText={setTamanhoLista} placeholder='Vagas' style={styles.input}/>
            <TextInput value={desconto} onChangeText={setDesconto} placeholder='Desconto' style={styles.input}/>
            
          </View>

        </View>

        <View style={styles.baixo}>
          <TouchableOpacity style={styles.btnCriar} onPress={addLista}>
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

