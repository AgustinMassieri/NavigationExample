import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Pantalla2({navigation}) {
    
    return (
      <View style={styles.container}>
        <Text>-- Screen 2 --</Text>
        <Button title='Go Back' onPress={ () => navigation.goBack()}/>
      </View>
    );
  }

/*
export default function Pantalla2({route, navigation}) {

  const valor = route.params;
  
  return (
    <View style={styles.container}>
      <Text>-- Screen 2 --</Text>
      <Text style={{fontWeight: 'bold'}}>Texto ingresado en la pantalla anterior: {valor.text}</Text>
      <Button title='Go Back' onPress={ () => navigation.goBack()}/>
    </View>
  );
}*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});