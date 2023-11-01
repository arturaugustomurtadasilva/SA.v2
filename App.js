import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Routes from './src/Routes'
import Login from './src/pages/Login'
import Registro from './src/pages/Registro'
import ListasSalvas from './src/pages/ListasSalvas'
import Inicio from './src/pages/Inicio'
import Registrese from './src/pages/Registrese'

const Stack = createNativeStackNavigator();

function Home() {
  return (
    <Routes/>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false,}} name="Inicio" component={Inicio}/>
        <Stack.Screen options={{headerShown:false,}} name="Login" component={Login}/>
        <Stack.Screen options={{headerShown:false,}} name="Registro" component={Registro}/>
        <Stack.Screen options={{headerShown:true,}} name="Listas Salvas" component={ListasSalvas}/>
        <Stack.Screen options={{headerShown:false,}} name="Home" component={Home}/>
        <Stack.Screen options={{headerShown:true,}} name="Registrese" component={Registrese}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}







