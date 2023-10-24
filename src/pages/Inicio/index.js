import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { styles } from './styles.js'
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons'


export default function Inicio() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>

        <View style={styles.viewCima}>
            <TouchableOpacity style={styles.botaoClose} onPress={() => navigation.navigate('Registro')}>
                <Ionicons 
                    name='close'
                    size={30} 
                    color={'black'} 
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoFornecedor}>
                <Text>Sou Fornecedor</Text>
            </TouchableOpacity>
        </View> 

        <View style={styles.viewMeio}>
            
        </View> 

        <View style={styles.viewBaixo}>
            <TouchableOpacity style={styles.botaoPular} onPress={() => navigation.navigate('Registro')}>
                <Text style={{color:'black'}}>Seguir</Text>
            </TouchableOpacity>
        </View>

        <StatusBar style="auto" />
    </View>
  );
}

