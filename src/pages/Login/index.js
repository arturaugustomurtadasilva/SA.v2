
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet,Button, TextInput,TouchableOpacity, Image,} from "react-native";
import { styles } from './styles'


export default function Login(){
    
    const navigation = useNavigation();
    return(

    <View style={styles.container}>

        <View style={styles.viewCima}>
            <Text>Login</Text>
        </View>

        <View style={styles.viewInputs}>
            <View style={styles.viewInput}>
                <Text>Usuário</Text>
                <TextInput style={styles.input}>
                    
                </TextInput>
            </View>
            <View style={styles.viewInput}>
                <Text>Senha</Text>
                <TextInput style={styles.input}>
                    
                </TextInput>
            </View>
            
                <TouchableOpacity style={styles.buttonLogar} onPress={() => navigation.navigate('Home')}> 
                <Text style={{color:'black',fontSize:20,}}>Concluir</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonIrParaRegistro} onPress={() => navigation.navigate('Registro')}> 
                <Text>Fazer Registro</Text>
                </TouchableOpacity>
        </View>

    </View>
    
    )
}



