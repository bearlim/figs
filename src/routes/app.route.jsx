import React from "react";
import ProfileScreen from "../../apps/profile/profile";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

const AppRoutes = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="ProfileScreen" component={ProfileScreen} />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
