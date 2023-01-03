import { useRoute, useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import {styles} from './styles'

type ParamsProps = {
  name: string;
  age: number;
};

export default function ScreenB() {
  const navigation = useNavigation();
  const route = useRoute();
  const { name, age } = route.params as ParamsProps;

  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar />

      <View style={styles.ViewInfo}>
        <Text style={styles.Info}>O Nome apresentado na tela Home foi:</Text>
        <Text style={styles.InfoText}>{name}</Text>
      </View>

      <View style={styles.ViewInfo}>
        <Text style={styles.Info}>Sua idade é:</Text>
        <Text style={styles.InfoText}>{age}</Text>
      </View>

      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.TextButton}>Voltar para página Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

