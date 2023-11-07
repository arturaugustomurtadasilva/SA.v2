
import { Text, View, TouchableOpacity,TextInput } from 'react-native';
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";

export default function Perfil() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Perfil')}>
            <Text>Editar dados</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
            <Text>Sair</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Registro')}>
            <Text>Excluir conta</Text>
        </TouchableOpacity>
    </View>
    
  );
}

