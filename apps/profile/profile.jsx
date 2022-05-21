import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Container } from "../../style/global/styleGlobal";

function ProfileScreen() {
  return (
    <Container>
      <View style={[style.CircleProfile, style.CircleShadow]}></View>
      <View style={style.circleProfilePicture}></View>
    </Container>
  );
}

const style = StyleSheet.create({
  CircleProfile: {
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
    width: Dimensions.get("window").width * 2,
    height: Dimensions.get("window").width * 2,
    backgroundColor: "hsl(340, 80%, 36.1%)",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -450,
  },
  circleProfilePicture: {
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
    width: Dimensions.get("window").width * 0.3,
    height: Dimensions.get("window").width * 0.3,
    borderColor: "#E23E57",
    alignSelf: "center",
  },
  CircleShadow: {
    shadowColor: "#171717",
    shadowOffset: { width: 50, height: 50 },
    shadowOpacity: 100,
    shadowRadius: 50,
  },
});

export default ProfileScreen;
