import React from "react";
import LoginScreen from "../../apps/login/login";
import { StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { RegisterScreen } from "../../apps/registration/register";

const AuthStack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
      <AuthStack.Screen name="RegistrationScreen" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthRoutes;
