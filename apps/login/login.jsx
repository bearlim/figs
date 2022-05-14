import React from "react";
import { Text, View, ScrollView, Button } from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Olá</Text>
      <Button title="Login" onPress={() => navigation.navigate("HomeScreen")} />
    </View>
  );
};

export default LoginScreen;
