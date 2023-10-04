import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,SafeAreaView } from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function Cadastro() {
  const [selectGenero, setSelectGenero] = useState(0)
  
  return (
    <View style={styles.container}>
      <View style={styles.viewTitulo}><Text>Cadastre sua lista</Text></View>
      
      <View style={styles.viewInputsGeral}>

        <View style={styles.viewInput}>
              <Text style={styles.textInput}>Título da lista</Text>
              <TextInput style={styles.input}>
                  
              </TextInput>
          </View>
          <View style={styles.viewInput}>
              <Text style={styles.textInput}>Gênero</Text>
                <TextInput style={styles.input}>
                  
                </TextInput>
          </View>
          <View style={styles.viewInput}>
              <Text style={styles.textInput}>Tamanho da lista</Text>
                <TextInput style={styles.input}>
                  
                </TextInput>
          </View>
          <View style={styles.viewInput}>
              <Text style={styles.textInput}>desconto desejado</Text>
                <TextInput style={styles.input}>
                  
                </TextInput>
          </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffa500',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewTitulo: {
    height:'10%',
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'blue'
  },
  viewInputsGeral:{
    height:'90%',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  viewInput:{
    height:'10%',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput:{
    fontSize:19,

  },
  input:{
    borderWidth:1,
    borderColor:'#b87e14',
    height:'100%',
    width:'55%'
  }
});