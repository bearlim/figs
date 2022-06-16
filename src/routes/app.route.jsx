import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProfileScreen from "../../apps/profile/profile";
import ScannerQr from "../../apps/qrCode/Scanner";

const AppStack = createStackNavigator();

const AppRoutes = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <AppStack.Screen name="QrCode" component={ScannerQr} />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
