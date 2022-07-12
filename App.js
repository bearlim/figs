import { StatusBar } from "expo-status-bar";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { AuthTunnel } from "./src/contexts/authentication";
import { Teste } from "./apps/recuperarSenha/recuperarSenha";
import { RegisterScreen } from "./apps/registration/register";
import ConfigScreen from "./apps/configScreen/config";
import ConfigScreenTest from "./apps/config/config";
import LoginScreen from "./apps/login/login";
import ConfigScreenT from "./apps/config/config";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthTunnel>
        <StatusBar backgroundColor={"transparent"} translucent={true} />
        <Routes />
      </AuthTunnel>
    </NavigationContainer>
  );
}
