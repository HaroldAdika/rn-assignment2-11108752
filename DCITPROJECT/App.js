import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>My name is <Text style={styles.bold}>Adika Harold Kwami ID"11108752"</Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4567b7',
    alignItems: 'center',
    justifyContent: 'center',
  },
text: {
  fontSize: 24,
},
bold: {
  fontWeight: 'bold',
},
});