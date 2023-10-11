
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native';
import { styles } from './styles'
import { useState } from 'react';


export default function Registro() {

  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [telefone, setTelefone] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')

  return (
    <View style={styles.container}>

        <View style={{  height:'10%',
                        width:'100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor:'#ffa500',
                    }}>
            <Text style={{
                            fontSize:25,
            }}>Registre-se</Text>
        </View>
        
        <View style={styles.viewInput}>
            <Text>Nome:</Text>
            <TextInput style={styles.input} value={nome} onChangeText={setNome}>
                
            </TextInput>
        </View>
        <View style={styles.viewInput}>
            <Text>Sobrenome:</Text>
            <TextInput style={styles.input}>
                
            </TextInput>
        </View>
        
        <View style={styles.viewInput}>
            <Text>Email:</Text>
            <TextInput style={styles.input}>
                
            </TextInput>
        </View>
        
        <View style={styles.viewInput}>
            <Text>CPF:</Text>
            <TextInput style={styles.input}>
                
            </TextInput>
        </View>
        
        <View style={styles.viewInput}>
            <Text>Telefone:</Text>
            <TextInput style={styles.input}>
                
            </TextInput>
        </View>
        
        <View style={styles.viewInput}>
            <Text>Senha:</Text>
            <TextInput style={styles.input}>
                    
            </TextInput>
        </View>
        
        <View style={styles.viewInput}>
            <Text>Confirmar Senha:</Text>
            <TextInput style={styles.input}>
                    
            </TextInput>
        </View>

        
        
        <View  style={{ height:'20%',
                        width:'100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
            <TouchableOpacity style={styles.buttonRegistrar} onPress={() => navigation.navigate('Login')}> 
              <Text style={{color:'black',fontSize:20,}}>Concluir</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonIrParaLogin} onPress={() => navigation.navigate('Login')}> 
              <Text>Fazer Login</Text>
            </TouchableOpacity>

        </View>
    
    </View>
  );
}



