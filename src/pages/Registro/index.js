
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
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  let usuarios = []

    function registrar() {
        const usuarioTemp = {
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            cpf: cpf,
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
            <Text>Confirmar senha</Text>
          </View>
          <View style={styles.viewInput}>
            <TextInput value={nome} onChangeText={setNome} placeholder='Nome' style={styles.input}/>
            <TextInput value={sobrenome} onChangeText={setSobrenome} placeholder='Sobrenome' style={styles.input}/>
            <TextInput value={email} onChangeText={setEmail} placeholder='Email' style={styles.input}/>
            <TextInput value={cpf} onChangeText={setCpf} placeholder='CPF' style={styles.input}/>
            <TextInput value={senha} onChangeText={setSenha} placeholder='Senha' style={styles.input}/>
            <TextInput value={confirmarSenha} onChangeText={setConfirmarSenha} placeholder='Senha' style={styles.input}/>
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



