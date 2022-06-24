import React, { useContext } from "react";
import { View, StatusBar } from "react-native";
import { Container, SubContainer } from "../../style/global/styleGlobal";
import {
  CircleProfile,
  CircleProfilePicture,
  ProfileName,
  EditProfile,
  DashboardProfile,
  Touchable,
  ConfigIcon,
} from "./components/styleProfile";
import AuthenticationContext from "../../src/contexts/authentication";

<<<<<<< HEAD
function ProfileScreen({navigation}) {
=======
function ProfileScreen({ navigation }) {
>>>>>>> 96f399d72209031f2efd3d5449e79200e1ca22a7
  const { user } = useContext(AuthenticationContext);

  return (
    <Container>
      <StatusBar color="auto" />
      <CircleProfile />
      <Touchable
        onPress={() => {
          navigation.navigate("ConfigScreen");
        }}
      >
        <ConfigIcon source={require("../../src/assets/icons/config.png")} />
      </Touchable>
      <Container>
        <CircleProfilePicture uriPicture={user.image_url} />
      </Container>
      <View>
        <ProfileName nmUser={user.name} />
      </View>
      <EditProfile />
<<<<<<< HEAD
      <DashboardProfile figsCount={47} ConqCount={15} navigation={navigation}/>
=======
      <DashboardProfile figsCount={47} ConqCount={15} navigation={navigation} />
>>>>>>> 96f399d72209031f2efd3d5449e79200e1ca22a7
    </Container>
  );
}

export default ProfileScreen;
