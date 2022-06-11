import React from "react";
import ProfileScreen from "../../apps/profile/profile";
import FigurinhaScreen from "../../apps/figurinha/figurinha";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

const AppRoutes = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <AppStack.Screen name="FigurinhaScreen" component={FigurinhaScreen} />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
