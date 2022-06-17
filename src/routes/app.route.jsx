import React from "react";
import ProfileScreen from "../../apps/profile/profile";
import AlbumScreen from "../../apps/albumscreen/album";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

const AppRoutes = () => {
  return (
    <AppStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="AlbumScreen"
    >
      <AppStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <AppStack.Screen name="AlbumScreen" component={AlbumScreen} />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
