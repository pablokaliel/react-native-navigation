import React from "react";
import { TouchableOpacity, Text, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import './styles'
import { styles } from "./styles";

export default function ScreenA() {
  const navigation = useNavigation();

  function OpenScreen() {
    navigation.navigate("Novo", { name: "Pablo", age: 21 });
  }
  return (
    <SafeAreaView style={styles.Container}>
      <Text style={styles.Text1}>
        Essa é a página Home, Página inicial, para ir para a página B(Novo)
        clique abaixo...
      </Text>

      <TouchableOpacity style={styles.Button} onPress={OpenScreen}>
        <Text style={styles.TextButton}>Ir para pagina B</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

