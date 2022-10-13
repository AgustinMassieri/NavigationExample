import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


export default function Pantalla1({navigation}) {
  
  const [value, setValue] = useState(0);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setValue(value=>value+1);
    });
    return unsubscribe;
  }, [navigation]);

  return (
  <View style={styles.container}>
      <Text>{value}</Text>
      <Button title='Open Drawer' onPress={ () => navigation.openDrawer()}/>
      <Button title='Go to the next page' onPress={ () => navigation.navigate('Screen2')}/>
  </View>
  );
}

/*USANDO DRAWER
export default function Pantalla1({navigation}) {
  
    return (
    <View style={styles.container}>
        <Text>-- Screen 1 --</Text>
        <Button title='Open Drawer' onPress={ () => navigation.openDrawer()}/>
        <Button title='Go to the next page' onPress={ () => navigation.navigate('Screen2')}/>
    </View>
    );
}*/

/*USANDO NAVIGATION
export default function Pantalla1({navigation}) {

    const [value, setValue] = useState("");

    return (
    <View style={styles.container}>
        <Text>-- Screen 1 --</Text>
        <TextInput style={styles.textInput} placeholder='Ingrese texto a mostrar en la siguiente pantalla' onChangeText={ (valor) => {setValue(valor);} }/>
        <Button title='Go to the next page' onPress={ () => navigation.navigate('Screen2', {text:value})}/>
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
  textInput: {
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2,
    padding: '2%'
  }
});