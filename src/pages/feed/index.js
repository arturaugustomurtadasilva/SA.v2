import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Feed() {
  return (
    <View style={styles.container}>
      <Text>tela 1</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});