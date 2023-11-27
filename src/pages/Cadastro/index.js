import React, { useState } from 'react';
import { StatusBar, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';

export default function Cadastro() {
  const [titulo, setTitulo] = useState('');
  const [genero, setGenero] = useState('');
  const [tamanhoLista, setTamanhoLista] = useState('');
  const [desconto, setDesconto] = useState('');
  const [isCadastroEfetuado, setIsCadastroEfetuado] = useState(false);

  async function addLista() {
    // Verifica se todos os campos estão preenchidos
    if (!titulo || !genero || !tamanhoLista || !desconto) {
      Alert.alert('Campos obrigatórios', 'Por favor, preencha todos os campos antes de criar a lista.');
      return;
    }

    const listaTemp = {
      titulo: titulo,
      genero: genero,
      tamanhoLista: tamanhoLista,
      desconto: desconto,
    };

    try {
      // Obtém as listas existentes do AsyncStorage
      const listaSalva = await AsyncStorage.getItem('listas');
      const listas = listaSalva ? JSON.parse(listaSalva) : [];

      // Adiciona a nova lista à lista existente
      listas.push(listaTemp);

      // Salva a lista atualizada no AsyncStorage
      await AsyncStorage.setItem('listas', JSON.stringify(listas));

      console.log('Dados salvos com sucesso:', listas);

      // Atualiza o estado para exibir a mensagem de cadastro efetuado
      setIsCadastroEfetuado(true);
    } catch (error) {
      console.error('Erro ao salvar dados:', error);
    }
  }


function resetarTela() {
  // Reseta o estado para ocultar a mensagem de cadastro efetuado
  setIsCadastroEfetuado(false);
  // Limpa os campos de entrada
  setTitulo('');
  setGenero('');
  setTamanhoLista('');
  setDesconto('');
}

return (
  <View style={styles.container}>
    <View style={styles.body}>
      <View style={styles.cima}>
        <Text style={styles.textoTitulo}> Cadastro de Lista </Text>
        <Ionicons name='create-outline' size={55} color={'#ffa500'} />
      </View>

      <Text style={styles.avisoCadastro}>
        {isCadastroEfetuado ? 'Cadastro concluído!' : isCadastroEfetuado === false ? 'Erro ao cadastrar.' : ''}
      </Text>

      {isCadastroEfetuado ? (
        <View style={styles.meioDois}>
          <TouchableOpacity style={styles.btnVoltar} onPress={resetarTela}>
            <Text>Concluído</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.meio}>
          <View style={styles.viewNomeInput}>
            <Text>Produto</Text>
            <Text>Gênero</Text>
            <Text>Vagas</Text>
            <Text>Desconto</Text>
          </View>
          <View style={styles.viewInput}>
            <TextInput value={titulo} onChangeText={setTitulo} placeholder='Produto' style={styles.input} />
            <TextInput value={genero} onChangeText={setGenero} placeholder='Gênero' style={styles.input} />
            <TextInput value={tamanhoLista} onChangeText={setTamanhoLista} placeholder='Vagas' style={styles.input} />
            <TextInput value={desconto} onChangeText={setDesconto} placeholder='Desconto' style={styles.input} />
          </View>
        </View>
      )}

      <View style={styles.baixo}>
        {!isCadastroEfetuado ? (
          <TouchableOpacity style={styles.btnCriar} onPress={addLista}>
            <Text>Criar</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>

    <View style={styles.footer}></View>

    <StatusBar style='auto' />
  </View>
)

}
