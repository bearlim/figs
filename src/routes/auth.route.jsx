import React from "react";
import LoginScreen from "../../apps/login/login";
import { createStackNavigator } from "@react-navigation/stack";
import { RegisterScreen } from "../../apps/registration/register";
import { ForgotPassScreen } from "../../apps/recuperarSenha/recuperarSenha";

const AuthStack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
      <AuthStack.Screen name="RegistrationScreen" component={RegisterScreen} />
      <AuthStack.Screen name="ForgotPassScreen" component={ForgotPassScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthRoutes;
