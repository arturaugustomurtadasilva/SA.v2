import React, { useState } from 'react';
import { StatusBar, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'

export default function Registro() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [nomeValido, setNomeValido] = useState(false);
  const [sobrenomeValido, setSobrenomeValido] = useState(false);
  const [emailValido, setEmailValido] = useState(false);
  const [cpfValido, setCpfValido] = useState(false);
  const [senhaValida, setSenhaValida] = useState(false);
  const [confirmarSenhaValida, setConfirmarSenhaValida] = useState(false);

  const validarEmail = (email) => {
    // Lógica de validação de e-mail (pode ser uma expressão regular)
    return email.includes('@');
  };

  const validarSenha = (senha) => {
    // Lógica de validação de senha (pode ser qualquer regra desejada)
    return senha.length >= 6 && /[A-Z]/.test(senha);
  };

  const registrar = () => {
    // Lógica de registro
    if (nomeValido && sobrenomeValido && emailValido && cpfValido && senhaValida && confirmarSenhaValida) {
      Alert.alert('Registro Concluído', 'Registro realizado com sucesso!', [{ text: 'OK' }]);
    } else {
      Alert.alert('Registro Falhou', 'Por favor, preencha todos os campos corretamente.', [{ text: 'OK' }]);
    }
  };

  return React.createElement(
    View,
    { style: styles.container },
    React.createElement(StatusBar, { style: 'auto' }),
    React.createElement(
      View,
      { style: styles.body },
      React.createElement(
        View,
        { style: styles.cima },
        React.createElement(Text, { style: styles.textoTitulo }, ' Registro '),
        React.createElement(Ionicons, { name: 'person-outline', size: 55, color: '#ffa500' })
      ),
      React.createElement(
        View,
        { style: styles.meio },
        React.createElement(
          View,
          { style: styles.viewNomeInput },
          React.createElement(Text, { style: styles.textoInput }, 'Nome'),
          React.createElement(Text, { style: styles.textoInput }, 'Sobrenome'),
          React.createElement(Text, { style: styles.textoInput }, 'Email'),
          React.createElement(Text, { style: styles.textoInput }, 'CPF'),
          React.createElement(Text, { style: styles.textoInput }, 'Senha'),
          React.createElement(Text, { style: styles.textoInput }, 'Confirmar')
        ),
        React.createElement(
          View,
          { style: styles.viewInput },
          React.createElement(TextInput, {
            value: nome,
            onChangeText: (text) => {
              setNome(text);
              setNomeValido(text.trim() !== '');
            },
            placeholder: 'Digite seu nome',
            style: [styles.input, { borderColor: nomeValido ? 'green' : 'red' }],
          }),
          React.createElement(TextInput, {
            value: sobrenome,
            onChangeText: (text) => {
              setSobrenome(text);
              setSobrenomeValido(text.trim() !== '');
            },
            placeholder: 'Digite seu sobrenome',
            style: [styles.input, { borderColor: sobrenomeValido ? 'green' : 'red' }],
          }),
          React.createElement(TextInput, {
            value: email,
            onChangeText: (text) => {
              setEmail(text);
              setEmailValido(validarEmail(text));
            },
            placeholder: 'Digite seu email',
            style: [styles.input, { borderColor: emailValido ? 'green' : 'red' }],
          }),
          React.createElement(TextInput, {
            value: cpf,
            onChangeText: (text) => {
              setCpf(text);
              setCpfValido(text.trim() !== '');
            },
            placeholder: 'Digite seu CPF',
            style: [styles.input, { borderColor: cpfValido ? 'green' : 'red' }],
          }),
          React.createElement(TextInput, {
            value: senha,
            onChangeText: (text) => {
              setSenha(text);
              setSenhaValida(validarSenha(text));
            },
            placeholder: 'Digite sua senha',
            style: [styles.input, { borderColor: senhaValida ? 'green' : 'red' }],
            secureTextEntry: true,
          }),
          React.createElement(TextInput, {
            value: confirmarSenha,
            onChangeText: (text) => {
              setConfirmarSenha(text);
              setConfirmarSenhaValida(text === senha && senhaValida);
            },
            placeholder: 'Confirme sua senha',
            style: [styles.input, { borderColor: confirmarSenhaValida ? 'green' : 'red' }],
            secureTextEntry: true,
          })
        )
      ),
      React.createElement(
        View,
        { style: styles.baixo },
        React.createElement(
          TouchableOpacity,
          {
            style: styles.botaoAdd,
            onPress: () => registrar(),
            disabled: !(nomeValido && sobrenomeValido && emailValido && cpfValido && senhaValida && confirmarSenhaValida),
          },
          React.createElement(Text, null, 'Registrar')
        ),
        React.createElement(
          TouchableOpacity,
          { style: styles.botaoTrc, onPress: () => navigation.navigate('Login') },
          React.createElement(Text, null, 'Logar')
        )
      )
    ),
    React.createElement(View, { style: styles.footer })
  );
}
