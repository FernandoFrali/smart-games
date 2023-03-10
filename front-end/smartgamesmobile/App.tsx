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
    width: '100vw',
    height: '80px',
    backgroundColor: '#1f1f1f',
    display: 'flex',
    gridTemplateColumns: '1fr 1fr 1fr',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    position: 'relative',
    margin: 0,

    filter: 'drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.5))',
  },
  text: {
    color: 'white',
    fontWeight: '700',
    fontSize: 30,
  },
});
