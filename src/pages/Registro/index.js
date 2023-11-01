
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native';
import { styles } from './styles'
import { useState } from 'react';

export default function Registro() {

const navigation = useNavigation();

  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [telefone, setTelefone] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  let usuarios = []

    function registrar() {
        const usuarioTemp = {
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            cpf: cpf,
            telefone: telefone,
            senha: senha
        }
        usuarios.push(usuarioTemp)
    }

    function functionNavigateLogin(){
        navigation.navigate('Login')
    }
    
    function functionCombined() {
        registrar();
        functionNavigateLogin();
    }  

  return (
    <View style={styles.container}>


        <View style={styles.body}>

            <View style={{margin:10}}>
                <Text style={{fontSize:30}}>Registro</Text>

            </View>
            
                <View style={styles.viewInput}>
                    <Text>Nome:</Text>
                    <TextInput 
                        style={styles.input} 
                        value={nome} 
                        onChangeText={setNome}
                    >
                        
                    </TextInput>
                </View>
                <View style={styles.viewInput}>
                    <Text>Sobrenome:</Text>
                    <TextInput 
                        style={styles.input}
                        value={sobrenome} 
                        onChangeText={setSobrenome}
                        >
                        
                    </TextInput>
                </View>
                
                <View style={styles.viewInput}>
                    <Text>Email:</Text>
                    <TextInput 
                        style={styles.input}
                        value={email} 
                        onChangeText={setEmail}
                    >
                        
                    </TextInput>
                </View>
                
                <View style={styles.viewInput}>
                    <Text>CPF:</Text>
                    <TextInput 
                        style={styles.input}
                        value={cpf} 
                        onChangeText={setCpf}
                    >
                        
                    </TextInput>
                </View>
                
                <View style={styles.viewInput}>
                    <Text>Telefone:</Text>
                    <TextInput 
                        style={styles.input}
                        value={telefone} 
                        onChangeText={setTelefone}
                    >
                        
                    </TextInput>
                </View>
                
                <View style={styles.viewInput}>
                    <Text>Senha:</Text>
                    <TextInput 
                        style={styles.input}
                        value={senha} 
                        onChangeText={setConfirmarSenha}
                        >
                            
                    </TextInput>
                </View>
                
                <View style={styles.viewInput}>
                    <Text>Confirmar Senha:</Text>
                    <TextInput 
                        style={styles.input}
                        value={confirmarSenha} 
                        onChangeText={setConfirmarSenha}
                        >
                            
                    </TextInput>
                </View>
                <TouchableOpacity style={styles.buttonRegistrar} onPress={() => functionCombined()}> 
                <Text style={{color:'black',fontSize:15,}}>Concluir</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonIrParaLogin} onPress={() => navigation.navigate('Login')} > 
                <Text>Fazer Login</Text>
                </TouchableOpacity>
        </View>
    
    </View>
  );
}



