import React from "react";
import ProfileScreen from "../../apps/profile/profile";
import AlbumScreen from "../../apps/albumscreen/album";
import FigurinhaScreen from "../../apps/figurinha/figurinha";
import { createStackNavigator } from "@react-navigation/stack";
import ScannerQr from "../../apps/qrCode/Scanner";
import NavBar from "../../apps/navbar/navbar";
import LoginScreen from "../../apps/login/login";

const AppStack = createStackNavigator();

const AppRoutes = () => {
  return (
    <AppStack.Navigator 
    screenOptions={{ headerShown: false }}
    initialRouteName="AlbumScreen"
    >
      <AppStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <AppStack.Screen name="AlbumScreen" component={AlbumScreen} />
      <AppStack.Screen name="QrCode" component={ScannerQr} />
      <AppStack.Screen name="FigurinhaScreen" component={FigurinhaScreen} />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
