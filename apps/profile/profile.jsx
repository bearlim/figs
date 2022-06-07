import React, { useContext } from "react";
import { View, StatusBar } from "react-native";
import { Container, SubContainer } from "../../style/global/styleGlobal";
import {
  CircleProfile,
  CircleProfilePicture,
  ProfileName,
  EditProfile,
  DashboardProfile,
} from "./components/styleProfile";
import AuthenticationContext from "../../src/contexts/authentication";

function ProfileScreen() {
  const { user } = useContext(AuthenticationContext);

  return (
    <Container>
      <StatusBar color="auto" />
      <CircleProfile />
      <Container>
        <CircleProfilePicture uriPicture={user.image_url} />
      </Container>
      <View>
        <ProfileName nmUser={user.name} />
      </View>
      <EditProfile />
      <DashboardProfile figsCount={47} ConqCount={15} />
    </Container>
  );
}

export default ProfileScreen;
