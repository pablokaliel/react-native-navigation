import React from "react";
import { View, Button, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ScreenA() {
  const navigation = useNavigation();

  function OpenScreen() {
    navigation.navigate("Novo", { name: "Pablo", age: 21 });
  }
  return (
    <View style={styles.Container}>
      <SafeAreaView />
      <Text style={styles.Text1}>
        Essa é a página Home, Página inicial, para ir para a página B(Novo)
        clique abaixo...
      </Text>
      <TouchableOpacity style={styles.Button} onPress={OpenScreen}>
        <Text style={styles.TextButton}>Ir para pagina B</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#1d2834",
    justifyContent: "center",
    alignItems: "center",
  },
  Text1: {
    color: "#fff",
    marginBottom: 15,
  },
  Button: {
    alignItems: "center",
    backgroundColor: "#4b627a",
    padding: 10,
    width: 300,
    marginTop: 16,
    borderRadius: 16,
  },
  TextButton: {
    color: "#fff",
  },
});
