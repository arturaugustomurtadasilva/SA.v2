
import React from "react";
import { View, Text, StyleSheet,Button, TextInput,TouchableOpacity, Image,} from "react-native";


export default function Login(){

    return(
    <View style={logo.container}>
        <View style={logo.logo}>
        <Image
           
      />
        </View>

        <View  style={login.textoSobreInputUsuario}>
            <Text style={login.text}>Usuário:</Text>
        </View>
        <View style={login.viewInputUsuario}>
            <TextInput style={login.inputLogin} placeholder='digite seu user'>
                
            </TextInput>
        </View>

        <View style={login.textoSobreInputSenha}>
            <Text style={login.text}>Senha:</Text>
        </View>
        <View style={login.viewInputSenha}>
            <TextInput style={login.inputLogin} placeholder='Digite sua senha'>
                
            </TextInput>
        </View>

        <View  style={login.viewButtonLogin}>
            <TouchableOpacity style={login.buttonLogin}>
                <Text>Entrar</Text>
            </TouchableOpacity>
        </View>
        <View  style={register.viewButtonRegister}>
            <TouchableOpacity>
                <Text>Não tem conta? registre-se</Text>
            </TouchableOpacity>
        </View>

    </View>        
    )
}




const logo = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    logo:{
        height:'20%',
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
})

const login = StyleSheet.create({
    textoSobreInputUsuario:{
        justifyContent: 'center',
        alignItems: 'center',
        height:'5%',
        width:'100%',
       
    },
    textoSobreInputSenha:{
        justifyContent: 'center',
        alignItems: 'center',
        height:'5%',
        width:'100%',
        
    },
    viewInputUsuario:{
        justifyContent: 'center',
        alignItems: 'center',
        height:'10%',
        width:'100%',
        
    },
    viewInputSenha:{
        justifyContent: 'center',
        alignItems: 'center',
        height:'10%',
        width:'100%',
        
    },
    viewButtonLogin:{
        justifyContent: 'center',
        alignItems: 'center',
        height:'10%',
        width:'100%',
        
    },
    buttonLogin:{
        height:'70%',
        width:'30%',
        borderWidth:1,
        borderRadius:10,
        backgroundColor:'#ffa500',
        justifyContent: 'center',
        alignItems: 'center',

    },
    inputLogin:{
        borderWidth: 1.5,   
        borderRadius:14,
        textAlign:'center',
        fontSize:15,
        height:'70%',
        width:'50%',
      
    },
    text:{
        fontSize:19,
        fontFamily:'Arial',
    },
})

const register = StyleSheet.create({
    viewButtonRegister:{
        justifyContent: 'center',
        alignItems: 'center',
        height:'40%',
        width:'100%',
        backgroundColor:'',
    },
})