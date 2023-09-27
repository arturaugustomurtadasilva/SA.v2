import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native';


export default function Register() {
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

            <TouchableOpacity style={styles.buttonLogin}>Já tem conta?</TouchableOpacity>

            <TouchableOpacity>
            <Text style={{color:'#daa520',fontSize:15,}}>Fazer Login</Text>
            </TouchableOpacity>
        </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewInput:{
    height:'10%',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    height:'40%',
    width:'55%',
    borderWidth:1,
    borderColor:'#d2982e',
    borderRadius:10,
    marginTop:3,
  },
  buttonLogin: {
    color:'#ffa500'	
  },
});