import React from 'react';
import { View,Button } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ScreenA() {
  const navigation = useNavigation()

  function OpenScreen(){
    navigation.navigate('screenB',{name:"Pablo"});
  }
  return (
    <View  style={{flex:1, backgroundColor:"#f00", justifyContent:'center'}} >
      <SafeAreaView/>
        <Button
        title='Ir Para Screen B'
        onPress={OpenScreen}
        />
    </View>
  );
}