
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet,Button, TextInput,TouchableOpacity, Image,} from "react-native";
import { styles } from './styles'

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
            
            <View>
            <Text>Login</Text>
            </View>

            <View style={styles.viewInput}>
                <Text>Usuário</Text>
                <TextInput 
                    style={styles.input}
                    value={usuario} 
                    onChangeText={setUsuario}>
                    
                </TextInput>
            </View>
            <View style={styles.viewInput}>
                <Text>Senha</Text>
                <TextInput 
                    style={styles.input} 
                    value={senha} 
                    onChangeText={setSenha}>
                    
                </TextInput>
            </View>
            <TouchableOpacity style={styles.buttonLogar} onPress={() => navigation.navigate('Home')}> 
            <Text style={{color:'black',fontSize:15,}}>Concluir</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonIrParaRegistro} onPress={() => navigation.navigate('Registro')}> 
            <Text>Fazer Registro</Text>
            </TouchableOpacity>
        </View>
    </View>
        
    
    
    )
}


