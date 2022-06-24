import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NavBar from "../../apps/navbar/navbar";

const AppStack = createStackNavigator();

const AppRoutes = () => {
  return <NavBar />;
};

export default AppRoutes;
