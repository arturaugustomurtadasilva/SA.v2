
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View,TouchableOpacity } from 'react-native';
import { styles } from './styles'
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons'

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

        <View style={styles.cima}>
          <Text style={styles.textoTitulo}> Registro </Text>
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
        <TouchableOpacity style={styles.botaoAdd} onPress={() => navigation.navigate('Login')}>
          <Text>Registrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoTrc} onPress={() => navigation.navigate('Login')}>
          <Text>Logar</Text>
        </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.footer}>
      </View>
  
      <StatusBar style="auto" />
    </View>
  );
}



