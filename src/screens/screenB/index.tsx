import { useRoute,useNavigation } from '@react-navigation/native';
import React from 'react';
import { View,Text,Button,TouchableOpacity,StatusBar } from 'react-native';

type ParamsProps ={
  name:string;
}


export default function ScreenB() {
  const navigation = useNavigation();
  const route = useRoute();
  const {name}= route.params as ParamsProps;

  return (
    <View  style={{flex:1, backgroundColor:"#082b44",alignItems:'center',justifyContent:"center"}} >
      <StatusBar />
      <Text style={{marginBottom:10,color:"#fff",fontSize:14}}>O Nome apresentado na tela Home foi:</Text>
      <Text style={{marginBottom:15,fontSize:24, color:"#fff"}}>
        {name}
      </Text>
      <TouchableOpacity
     style={{  alignItems: 'center',
     backgroundColor: '#0a95d6ca',
     padding: 10,
     width: 300,
     marginTop: 16,
     borderRadius:16,
     
   }}
      onPress={()=> navigation.goBack()}><Text style={{color:"#fff"}}>Voltar para página Home</Text></TouchableOpacity>
    </View>
  );
}