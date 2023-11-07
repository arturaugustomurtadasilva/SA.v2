
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TextInput,TouchableOpacity,} from "react-native";
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons'

export const logado = false

export default function Login(){

    const navigation = useNavigation();

    const [usuario,setUsuario] = useState()
    const [senha,setSenha] = useState()

    function login() {
        const UsuarioLog = {
            usuario: usuario,
            senha: senha,
        }
    }

    return(

        <View style={styles.container}>

        <View style={styles.body}>
  
          <View style={styles.cima}>
            <Text style={styles.textoTitulo}> Login </Text>
            <Ionicons name='person-outline' size={55} color={'#ffa500'}/>
          </View>
  
          <View style={styles.meio}>
  
            <View style={styles.viewNomeInput}> 
              <Text>Nome</Text>
              <Text>Senha</Text>
            </View>
            <View style={styles.viewInput}>
              <TextInput placeholder='Nome' style={styles.input}/>
              <TextInput placeholder='Senha' style={styles.input}/>
            </View>
  
          </View>
  
          <View style={styles.baixo}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.botaoAdd}>
            <Text>Logar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Registro')} style={styles.botaoTrc}>
            <Text>Registro</Text>
          </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.footer}>
        </View>

      </View>
        
    
    
    )
}


