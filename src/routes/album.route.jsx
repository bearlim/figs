import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BiografiaScreen from "../../apps/figbios/biografias";
import AlbumScreen from "../../apps/albumscreen/album";

const AlbumStack = createStackNavigator();

const AlbumRoutes = () => {
  return (
    <AlbumStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="AlbumScreen"
    >
      <AlbumStack.Screen name="FigBios" component={BiografiaScreen} />
      <AlbumStack.Screen name="AlbumScreen" component={AlbumScreen} />
    </AlbumStack.Navigator>
  );
};

export default AlbumRoutes;
