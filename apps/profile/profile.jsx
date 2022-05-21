import React from "react";
import { Text, Dimensions, View, StyleSheet } from "react-native";
import { Container } from "../../style/global/styleGlobal";

function ProfileScreen() {
  return <View style={style.circleProfile}></View>;
}

const style = StyleSheet.create({
  circleProfile: {
    flex: 1,
    borderRadius: Math.round(
      Dimensions.get("window").width + Dimensions.get("window").height
    ),
    width: Dimensions.get("window").width * 2,
    height: Dimensions.get("window").width * 2,
    backgroundColor: "hsl(340, 80%, 36.1%)",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 50,
  },
});

export default ProfileScreen;
