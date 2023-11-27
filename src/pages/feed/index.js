import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

const produtos = [
  { letra: 'Produto A', numero: 'entrar' },
  { letra: 'Produto B', numero: 'entrar' },
  { letra: 'Produto C', numero: 'entrar' },
  { letra: 'Produto D', numero: 'entrar' },
  { letra: 'Produto E', numero: 'entrar' },
  { letra: 'Produto F', numero: 'entrar' },
  { letra: 'Produto G', numero: 'entrar' },
  { letra: 'Produto H', numero: 'entrar' },
  { letra: 'Produto I', numero: 'entrar' },
  { letra: 'Produto J', numero: 'entrar' },
];

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {produtos.map((produto, index) => (
          <View key={index} style={styles.tweet}>
            <Text style={styles.produto}>{produto.letra}</Text>
            <TouchableOpacity style={styles.numero}>{produto.numero}</TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  tweet: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  produto: {
    flex: 1,
  },
  numero: {
    fontWeight: 'bold',
  },
});

export default App;
