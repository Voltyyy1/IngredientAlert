import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

export default function modal() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Camera Usage Instructions</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <Text style={styles.instruction}>1. Select your mode: Ingredients, Label, or Barcode.</Text>
      <Text style={styles.instruction}>2. Position the camera to capture the desired item.</Text>
      <Text style={styles.instruction}>3. Press the capture button once ready.</Text>
      <Text style={styles.instruction}>4. The image will be analyzed and results will be shown accordingly.</Text>

      {/* use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '80%',
  },
  instruction: {
    fontSize: 16,
    marginVertical: 8,
    textAlign: 'left',
    alignSelf: 'stretch',
    paddingHorizontal: 10,
  },
});

