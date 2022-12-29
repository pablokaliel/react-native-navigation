import React from 'react';
import { View,Button,TouchableOpacity,Text } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ScreenA() {
  const navigation = useNavigation()

  function OpenScreen(){
    navigation.navigate('Novo',{name:"Pablo"});
  }
  return (
    <View  style={{flex:1, backgroundColor:"#1d2834", justifyContent:'center',alignItems:"center"}} >
      <SafeAreaView/>
      <Text style={{
        color:"#fff",
        marginBottom:15,
    }}>Essa é a página Home, Página inicial, para ir para a página B(Novo) clique abaixo...</Text>
        <TouchableOpacity style={{  alignItems: 'center',
    backgroundColor: '#4b627a',
    padding: 10,
    width: 300,
    marginTop: 16,
    borderRadius:16,
  }}
        onPress={OpenScreen}><Text style={{color:"#fff"}}>Ir para pagina B</Text></TouchableOpacity>
    </View>
  );
}