import { useRoute,useNavigation } from '@react-navigation/native';
import React from 'react';
import { View,Text,Button,TouchableOpacity,StatusBar } from 'react-native';

type ParamsProps ={
  name:string;
  age:number;
}


export default function ScreenB() {
  const navigation = useNavigation();
  const route = useRoute();
  const {name,age}= route.params as ParamsProps;

  return (
    <View  style={{flex:1, backgroundColor:"#082b44",alignItems:'center',justifyContent:"center",}} >
      <StatusBar />
      <View style={{alignItems:'center',width:"100%",justifyContent:"center", flexDirection:"row"}}>
      <Text style={{color:"#fff",fontSize:14}}>O Nome apresentado na tela Home foi:</Text>
      <Text style={{marginLeft:10,fontSize:16, color:"#00ff40"}}>{name}</Text>
      </View>
      <View style={{alignItems:'center',width:"100%",justifyContent:"center", flexDirection:"row"}}>
      <Text style={{fontSize:14, color:"#fff"}}>Sua idade é:</Text>
      <Text style={{marginLeft:10,fontSize:16, color:"#00eeff"}}>{age}</Text>
      </View>
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