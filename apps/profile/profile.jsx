import React from "react";
import { Text, View, StatusBar, StyleSheet, Dimensions } from "react-native";
import { Container, SubContainer } from "../../style/global/styleGlobal";
import {
  CircleProfile,
  CircleProfilePicture,
  ProfileName,
  EditProfile,
  DashboardProfile,
} from "./components/styleProfile";

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

export default ProfileScreen;
