import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Feed() {
  return (
    <View style={styles.container}>
      <View style={styles.viewInputPesquisa}>
        <TouchableOpacity style={styles.buttonPesquisa} >

        <FontAwesome
          name='search'
          size={25}
          color='black'
          />

        </TouchableOpacity>
      </View>
        <View style={styles.viewFeed}>
        
        </View>
        <View style={styles.viewNav}>
        
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
  viewInputPesquisa:{
    alignItems: 'center',
    justifyContent: 'center',
    height:'10%',
    width:'100%',
    backgroundColor:'white',
  },
  buttonPesquisa:{
    alignItems: 'center',
    justifyContent: 'center',
    height:'60%',
    width:'80%',
    borderRadius:15,
    borderWidth:2,
    borderColor:'black',
    backgroundColor:'#ffa500',
  },
  viewFeed:{
    height:'78%',
    width:'100%',
    backgroundColor:'blue',
  },
  viewNav :{
    height:'12%',
    width:'100%',
    backgroundColor:'green',
  },

});