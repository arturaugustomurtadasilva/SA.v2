
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Registrese() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>Registre-se para acessar essa página</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text>registre-se</Text>
            </TouchableOpacity>
        <StatusBar style="auto" />
        </View>
  );
}