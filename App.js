import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Calculator from './Calculator';
import History from './History';


export default function App() {

  const Stack = createNativeStackNavigator();
  


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ="Calculator" component={Calculator} />
        <Stack.Screen name ="History" component={History} />
      </Stack.Navigator>
    </NavigationContainer>
     
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  input:{
    width:200,
    borderColor:'gray',
    borderWidth:1
  }
});