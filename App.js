import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hey</Text>
      <Text>This is Siddharth Bisht creating my first.</Text>
      <Text>React Native Application</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'teal',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
