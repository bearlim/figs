import { StatusBar } from "expo-status-bar";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { AuthTunnel } from "./src/contexts/authentication";
import ScannerQr from "./apps/qrCode/Scanner";
import NavBar from "./apps/navbar/navbar";
import LoginScreen from "./apps/login/login"
import MainContainer from "./apps/navbar/testNav";


const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      
      <AuthTunnel>
      
      <StatusBar backgroundColor={'transparent'} translucent={true} />

        <NavBar />
        {/* <Routes />   */}
      </AuthTunnel>
    </NavigationContainer>
  );
}
