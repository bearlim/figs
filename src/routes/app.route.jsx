import React from "react";
<<<<<<< HEAD
import ProfileScreen from "../../apps/profile/profile";
import FigurinhaScreen from "../../apps/figurinha/figurinha";
import AlbumScreen from "../../apps/albumscreen/album";
=======
>>>>>>> 96f399d72209031f2efd3d5449e79200e1ca22a7
import { createStackNavigator } from "@react-navigation/stack";
import NavBar from "../../apps/navbar/navbar";

const AppStack = createStackNavigator();

const AppRoutes = () => {
<<<<<<< HEAD
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <AppStack.Screen name="FigurinhaScreen" component={FigurinhaScreen} />
    </AppStack.Navigator>
    // <AppStack.Navigator
    //   screenOptions={{ headerShown: false }}
    //   initialRouteName="AlbumScreen"
    // >
    //   <AppStack.Screen name="ProfileScreen" component={ProfileScreen} />
    //   <AppStack.Screen name="AlbumScreen" component={AlbumScreen} />
    //   <AppStack.Screen name="QrCode" component={ScannerQr} />
    //   <NavBar />
    // </AppStack.Navigator>
    //<NavBar />
  );
=======
  return <NavBar />;
>>>>>>> 96f399d72209031f2efd3d5449e79200e1ca22a7
};

export default AppRoutes;
