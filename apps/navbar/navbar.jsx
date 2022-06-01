import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Octicons from "react-native-vector-icons/Octicons";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "../home/home";
import ProfileScreen from "../profile/profile";

const Tab = createBottomTabNavigator();

export default function NavBar() {
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === "Home") {
            iconName = "home";
            return <Octicons name={iconName} size={size} color={color} />;
          } else if (rn === "Profile") {
            iconName = "person-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen component={HomeScreen} />
    </Tab.Navigator>
  </NavigationContainer>;
}
