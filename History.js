import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from "react";
import { StyleSheet, Text, View, Button, FlatList,} from 'react-native';

export default function History({route, navigation}){

    const {data}=route.params;

    return(
        <View style={styles.container}>
  
        <View style={{flex:1, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
          <Text>History</Text>
          <FlatList
          data={data}
          renderItem={({item}) =><Text>{item.key}</Text>}  
          keyExtractor={(item, index) => index.toString()}
          />
        </View>
        
        <StatusBar style="auto" />
      </View>
    );
};

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