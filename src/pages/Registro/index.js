
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native';
import { styles } from './styles'


export default function Registro() {
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
            <TextInput style={styles.input}>
                
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
            <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('Login')}> 
              <Text>Registrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('Login')}> 
              <Text>Fazer Login</Text>
            </TouchableOpacity>

        </View>
    
    </View>
  );
}

