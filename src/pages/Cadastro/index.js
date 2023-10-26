import { StatusBar } from 'expo-status-bar';
import { Text, View,TextInput, } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { styles } from './styles'
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';

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
      <View style={styles.viewTitulo}><Text style={styles.textTitle}>Cadastre sua lista</Text></View>
      
      <View style={styles.viewInputsGeral}>

        <View style={styles.viewInput}>
              <Text style={styles.textInput}>Título da lista</Text>
              <TextInput
               style={styles.input}
               value={titulo}
               onChangeText={setTitulo}
              >
                  
              </TextInput>
          </View>
          <View style={styles.viewInput}>
              <Text style={styles.textInput}>Gênero</Text>
                <TextInput 
                  style={styles.input}
                  value={genero}
                  onChangeText={setGenero}
                >
                  
                </TextInput>
          </View>
          <View style={styles.viewInput}>
              <Text style={styles.textInput}>Tamanho da lista</Text>
                <TextInput 
                  style={styles.input}
                  value={tamanhoLista}
                  onChangeText={setTamanhoLista}
                  >
                  
                </TextInput>
          </View>
          <View style={styles.viewInput}>
              <Text style={styles.textInput}>desconto desejado</Text>
                <TextInput 
                  style={styles.input}
                  value={desconto}
                  onChangeText={setDesconto}
                  >
                  
                </TextInput>
                
          </View>
          <View>
            <TouchableOpacity onPress={addLista}>
              <Text>
                addLista
              </Text>
            </TouchableOpacity>
          </View>
      </View>

    </View>
  );
}

