import React from "react";
import ProfileScreen from "../../apps/profile/profile";
import AlbumScreen from "../../apps/albumscreen/album";
import { createStackNavigator } from "@react-navigation/stack";
import ScannerQr from "../../apps/qrCode/Scanner";
import NavBar from "../../apps/navbar/navbar";
import LoginScreen from "../../apps/login/login";

const AppStack = createStackNavigator();

const AppRoutes = () => {
  return (
    // <AppStack.Navigator
    //   screenOptions={{ headerShown: false }}
    //   initialRouteName="AlbumScreen"
    // >
    //   <AppStack.Screen name="ProfileScreen" component={ProfileScreen} />
    //   <AppStack.Screen name="AlbumScreen" component={AlbumScreen} />
    //   <AppStack.Screen name="QrCode" component={ScannerQr} />
    //   <NavBar />
    // </AppStack.Navigator>
    <NavBar />
  );
};

export default AppRoutes;
