import React from "react";
import LoginScreen from "../../apps/login/login";
import { StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const AuthStack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      {/* Ocultar nome da screen: headerShown: false */}
      {/* <StatusBar color="auto" /> */}
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthRoutes;
