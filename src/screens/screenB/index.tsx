import { useRoute,useNavigation } from '@react-navigation/native';
import React from 'react';
import { View,Text,Button } from 'react-native';

type ParamsProps ={
  name:string;
}


export default function ScreenB() {
  const navigation = useNavigation();
  const route = useRoute();
  const {name}= route.params as ParamsProps;

  return (
    <View  style={{flex:1, backgroundColor:"#0400ff",alignItems:'center',justifyContent:"center"}} >
      <Text style={{fontSize:24, color:"#fff"}}>
        {name}
      </Text>
      <Button
      title='Voltar Para Screen A'
      onPress={()=> navigation.goBack()}
      />
    </View>
  );
}