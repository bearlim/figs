import { StatusBar } from "expo-status-bar";
import React from "react";
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
  );
}
