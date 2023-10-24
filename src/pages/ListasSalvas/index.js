import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { styles } from './styles'

export default function ListasSalvas() {
  return (
    <View style={styles.container}>
      <Text>tela listas salvas</Text>
      <StatusBar style="auto" />
    </View>
  );
}

