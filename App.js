import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Routes from './src/Routes'
import Login from './src/pages/Login'
import Registro from './src/pages/Registro'
import Feed from './src/pages/Feed'

const Stack = createNativeStackNavigator();

function Home() {
  return (
    <Routes/>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
                headerShown:false,          
            }}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Registro" component={Registro}/>
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}





