import React from "react";
import ProfileScreen from "../../apps/profile/profile";
<<<<<<< HEAD
import FigurinhaScreen from "../../apps/figurinha/figurinha";
=======
import AlbumScreen from "../../apps/albumscreen/album";
>>>>>>> 3296cde4ce905774670aabf15eb4529c9b2356e5
import { createStackNavigator } from "@react-navigation/stack";
import ScannerQr from "../../apps/qrCode/Scanner";
import NavBar from "../../apps/navbar/navbar";
import LoginScreen from "../../apps/login/login";

const AppStack = createStackNavigator();

const AppRoutes = () => {
  return (
<<<<<<< HEAD
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <AppStack.Screen name="FigurinhaScreen" component={FigurinhaScreen} />
    </AppStack.Navigator>
=======
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
>>>>>>> 3296cde4ce905774670aabf15eb4529c9b2356e5
  );
};

export default AppRoutes;
