import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ConfigScreen from "../../apps/configScreen/config";
import ProfileScreen from "../../apps/profile/profile";
import EditProfile from "../../apps/editProfile/editProfile";

const ProfileStack = createStackNavigator();

const ProfileRoutes = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="ProfileScreen"
    >
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <ProfileStack.Screen name="ConfigScreen" component={ConfigScreen} />
      <ProfileStack.Screen name="EditProfile" component={EditProfile} />
    </ProfileStack.Navigator>
  );
};

export default ProfileRoutes;
