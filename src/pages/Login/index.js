
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet,Button, TextInput,TouchableOpacity, Image,} from "react-native";
import { styles } from './styles'


export default function Login(){
    
    const navigation = useNavigation();
    return(
    <View style={styles.container}>
        <View style={styles.logo}>
        <Image
           
      />
        </View>

        <View  style={styles.textoSobreInputUsuario}>
            <Text style={styles.text}>Usuário:</Text>
        </View>
        <View style={styles.viewInputUsuario}>
            <TextInput style={styles.inputLogin} placeholder='digite seu user'>
                
            </TextInput>
        </View>

        <View style={styles.textoSobreInputSenha}>
            <Text style={styles.text}>Senha:</Text>
        </View>
        <View style={styles.viewInputSenha}>
            <TextInput style={styles.inputLogin} placeholder='Digite sua senha'>
                
            </TextInput>
        </View>

        <View  style={styles.viewButtonLogin}>
            <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('Home')}>
                <Text>Entrar</Text>
            </TouchableOpacity>
        </View>
        <View  style={styles.viewButtonRegister}>
            <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
                <Text>Não tem conta? <Text style={{color:'#ffa500'}} >Registre-se</Text></Text>
            </TouchableOpacity>
        </View>
        
    </View>        
    )
}



