//https://docs.expo.dev/versions/latest/sdk/camera/
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import FoodCamera from '../../components/FoodCamera';
import { Text, View } from '../../components/Themed';

export default function addFood() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      <FoodCamera />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Remove or comment out the following two lines:
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

