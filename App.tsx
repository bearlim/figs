import { StatusBar } from "expo-status-bar";
import React from "react";
<<<<<<< HEAD:App.js
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { AuthTunnel } from "./src/contexts/authentication";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthTunnel>
        <StatusBar />
        <Routes />
      </AuthTunnel>
    </NavigationContainer>
=======
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
>>>>>>> main:App.tsx
  );
}
