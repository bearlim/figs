import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { Text, View, ScrollView, Button, StyleSheet } from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={style.brandTitleView}>
        <Text style={style.brandTitle}>globofigs.com</Text>
      </View>
      <View style={style.brandTitleView}>
        <Text style={style.optionChoice}>Escolha uma opção para entrar</Text>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  brandTitleView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
  brandTitle: {
    fontSize: 40,
  },
  optionChoice: {
    color: "rgba(0, 0, 0, 0.31)",
  },
});

export default LoginScreen;
