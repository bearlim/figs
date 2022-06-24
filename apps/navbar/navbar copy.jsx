import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import QrCode from "../qrCode/Scanner";
import AlbumRoutes from "../../src/routes/album.route";
import ProfileRoutes from "../../src/routes/profile.route";

const Tab = createBottomTabNavigator();

function NavBar() {
  return (
    <Tab.Navigator
      initialRouteName={"AlbumRoutes"}
      screenOptions={({ route }) => ({
        headerShown: false,
        title: "*",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === "profile") {
            iconName = focused ? "person-outline" : "person-outline";
          } else if (rn === "AlbumRoutes") {
            iconName = focused ? "book-outline" : "book-outline";
          } else if (rn === "qrCode") {
            iconName = focused ? "qr-code-outline" : "qr-code-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        tabStyle: {
          backgroundColor: "#EBE4F0",
          // height: 75
        },

        activeTintColor: "#D85502",
        inactiveTintColor: "#60160D",
        // labelStyle: { paddingBottom: 10, fontSize: 10 },
        // style: { backgroundColor: 'black' },
        // padding: 10, height: 70,
      }}
    >
      <Tab.Screen name="qrCode" component={QrCode} />
      <Tab.Screen name="AlbumRoutes" component={AlbumRoutes} />
      <Tab.Screen name="profile" component={ProfileRoutes} />
    </Tab.Navigator>
  );
}

export default NavBar;
