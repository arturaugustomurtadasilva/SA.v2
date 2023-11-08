import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { styles } from './styles'


export default function Feed() {
  return (
    <View style={styles.container}>

      <View style={styles.body}>
        <View style={styles.viewTitulo}>
          <Text style={styles.textTitle}>
            Listas
          </Text>
        </View>
        <View style={styles.viewFeed}>
          <View style={styles.viewLista}>

            <View style={styles.viewCimaLista}>
                <Text>nomeProduto</Text>
                <View style={{flexDirection:'row',alignItems:'center', justifyContent:'center',gap:5}}>
                <FontAwesome 
                name='user'
                size={20} 
                color={'#ffa500'} 
                />
                <Text>0/xxx</Text>
                </View>
            </View>

            <View style={styles.viewBaixoLista}> 
              <TouchableOpacity>
              <FontAwesome 
                name='plus'
                size={25} 
                color={'#ffa500'} 
              />
              </TouchableOpacity>
              <TouchableOpacity>
              <FontAwesome 
                name='star'
                size={25} 
                color={'#ffa500'} 
                  />
              </TouchableOpacity>
            </View>

          </View>
        </View>

      </View>
  </View>

  );
}

