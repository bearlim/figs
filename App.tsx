import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Cadastro } from "./apps/cadastro";
import { LoginScreen } from "./apps/login/login";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <LoginScreen /> */}
      <Cadastro></Cadastro>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
