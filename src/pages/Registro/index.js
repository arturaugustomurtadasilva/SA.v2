
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
            <Text style={styles.textoInput}>Nome</Text>
            <Text style={styles.textoInput} >Sobrenome</Text>
            <Text style={styles.textoInput}>Email</Text>
            <Text style={styles.textoInput}>CPF</Text>
            <Text style={styles.textoInput}>Senha</Text>
            <Text style={styles.textoInput}>Confirmar</Text>
          </View>
          <View style={styles.viewInput}>
            <TextInput value={nome} onChangeText={setNome} placeholder='Digite seu nome' style={styles.input}/>
            <TextInput value={sobrenome} onChangeText={setSobrenome} placeholder='Digite seu sobrenome' style={styles.input}/>
            <TextInput value={email} onChangeText={setEmail} placeholder='Digite seu email' style={styles.input}/>
            <TextInput value={cpf} onChangeText={setCpf} placeholder='Digite seu CPF' style={styles.input}/>
            <TextInput value={senha} onChangeText={setSenha} placeholder='Digite sua senha' style={styles.input}/>
            <TextInput value={confirmarSenha} onChangeText={setConfirmarSenha} placeholder='Confirme sua senha' style={styles.input}/>
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



