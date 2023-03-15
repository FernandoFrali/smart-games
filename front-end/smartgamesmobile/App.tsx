import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Games } from './components/Games';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Smart Games</Text>
      </View>
      <Games />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 0,
    border: 0,
  },
  header: {
    width: '100%',
    height: 80,
    backgroundColor: '#1f1f1f',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    position: 'relative',
    margin: 0,
  },
  text: {
    color: 'white',
    fontWeight: '700',
    fontSize: 30,
  },
});
