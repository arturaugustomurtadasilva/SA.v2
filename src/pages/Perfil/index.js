
import { Text, View, TouchableOpacity,TextInput } from 'react-native';
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";

export default function Perfil() {

  const navigation = useNavigation();

  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [senha, setSenha] = useState('')

  return (
    <View style={styles.container}>

      <View style={styles.body}>

        <View style={styles.cima}>
          <Text style={styles.textoTitulo}> Meu Perfil </Text>
          <Ionicons name='person-outline' size={55} color={'#ffa500'}/>
        </View>

        <View style={styles.meio}>
          <View style={styles.viewNomeInput}> 
            <View style={styles.viewNome}>
              <Text>Nome</Text> 
            </View>
            <View style={styles.viewInput}>
              <TextInput value={nome} onChangeText={setNome} placeholder='Nome' style={styles.input}/>
            </View>
          </View>
          <View style={styles.viewNomeInput}> 
            <View style={styles.viewNome}>
              <Text>Sobrenome</Text>
            </View>
            <View style={styles.viewInput}>
              <TextInput value={sobrenome} onChangeText={setSobrenome} placeholder='Sobrenome' style={styles.input}/>
            </View>
          </View>
          <View style={styles.viewNomeInput}> 
            <View style={styles.viewNome}>
              <Text>Email</Text>
            </View>
            <View style={styles.viewInput}>
              <TextInput value={email} onChangeText={setEmail} placeholder='Email' style={styles.input}/>
            </View>
          </View>
          <View style={styles.viewNomeInput}> 
            <View style={styles.viewNome}>
              <Text>CPF</Text>
            </View>
            <View style={styles.viewInput}>
              <TextInput value={cpf} onChangeText={setCpf} placeholder='CPF' style={styles.input}/>
            </View>
          </View>
          <View style={styles.viewNomeInput}> 
            <View style={styles.viewNome}>
              <Text>Senha</Text>
            </View>
            <View style={styles.viewInput}>
              <TextInput value={senha} onChangeText={setSenha} placeholder='Senha' style={styles.input}/>
            </View>
          </View>

        </View>

        <View style={styles.baixo}>
        <TouchableOpacity onPress={() => navigation.navigate('Opcoes')} style={styles.botaoAdd}>
          <Text>Opções</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ListasSalvas')} style={styles.botaoAdd}>
          <Text>Minhas listas</Text>
        </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.footer}>
      </View>
  
    </View>
    
  );
}

