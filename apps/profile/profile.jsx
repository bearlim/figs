import React from "react";
import { Text, View } from "react-native";
import { Container } from "../../style/global/styleGlobal";
import {
  CircleProfile,
  CircleProfilePicture,
  ProfileName,
  EditProfile,
} from "./styleProfile";

function ProfileScreen() {
  return (
    <Container>
      <CircleProfile />
      <Container>
        <CircleProfilePicture uriPicture="https://avatars.githubusercontent.com/u/77466092?v=4" />
      </Container>
      <View>
        <ProfileName nmUser="Yuri" />
      </View>
      <EditProfile />
    </Container>
  );
}

export default ProfileScreen;
