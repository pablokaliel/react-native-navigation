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

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#082b44",
    alignItems: "center",
    justifyContent: "center",
  },
  ViewInfo: {
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
  },
  Info: { color: "#fff", fontSize: 14 },
  InfoText: { marginLeft: 10, fontSize: 16, color: "#00eeff" },
  Button: {
    alignItems: "center",
    backgroundColor: "#0a95d6ca",
    padding: 10,
    width: 300,
    marginTop: 16,
    borderRadius: 16,
  },
  TextButton: { color: "#fff" },
});
