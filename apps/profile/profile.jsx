import React from "react";
import { Text, View, StatusBar, StyleSheet, Dimensions } from "react-native";
import { Container, SubContainer } from "../../style/global/styleGlobal";
import {
  CircleProfile,
  CircleProfilePicture,
  ProfileName,
  EditProfile,
  DashboardProfile,
} from "./styleProfile";

function ProfileScreen() {
  return (
    <Container>
      <StatusBar color="auto" />
      <CircleProfile />
      <Container>
        <CircleProfilePicture uriPicture="https://avatars.githubusercontent.com/u/77466092?v=4" />
      </Container>
      <View>
        <ProfileName nmUser="Yuri" />
      </View>
      <EditProfile />
      <DashboardProfile figsCount={47} ConqCount={15} />
    </Container>
  );
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
