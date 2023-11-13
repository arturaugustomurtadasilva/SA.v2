import React, { useState } from 'react';
import { StatusBar, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';

export default function Cadastro() {
  const [titulo, setTitulo] = useState('');
  const [genero, setGenero] = useState('');
  const [tamanhoLista, setTamanhoLista] = useState('');
  const [desconto, setDesconto] = useState('');
  const [isCadastroEfetuado, setIsCadastroEfetuado] = useState(false);

  function addLista() {
    const listas = [];

    const listaTemp = {
      titulo: titulo,
      genero: genero,
      tamanhoLista: tamanhoLista,
      desconto: desconto,
    };

    listas.push(listaTemp);

    console.log(listas);

    // Atualiza o estado para exibir a mensagem de cadastro efetuado
    setIsCadastroEfetuado(true);
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

        {isCadastroEfetuado ? (
          <View style={styles.meioDois}>
            <Text style={styles.textCadastro}>Cadastro efetuado!</Text>
            <TouchableOpacity style={styles.btnVoltar} onPress={resetarTela}>
              <Text>Concluído</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.meio}>
            <View style={styles.viewNomeInput}>
              <Text>Título</Text>
              <Text>Gênero</Text>
              <Text>Vagas</Text>
              <Text>Desconto</Text>
            </View>
            <View style={styles.viewInput}>
              <TextInput value={titulo} onChangeText={setTitulo} placeholder='Título' style={styles.input} />
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
  );
}
