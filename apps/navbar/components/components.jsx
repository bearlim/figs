import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// Screens
import QrCode from "../../qrCode/Scanner";
import AlbumRoutes from "../../../src/routes/album.route";
import ProfileRoutes from "../../../src/routes/profile.route";

const Tab = createMaterialBottomTabNavigator();

const ScreensComponents = () => {
  return (
    <Tab.Navigator
      initialRouteName="AlbumRoutes"
      screenOptions={{
        headerShown: false,
        swipeEnabled: true,
        animationEnabled: true,
      }}
      activeColor="#D85502"
      inactiveColor="#60160D"
      barStyle={{ backgroundColor: "#EBE4F0" }}
    >
      <Tab.Screen
        name="AlbumRoutes"
        component={AlbumRoutes}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            // <ImageIcon source={require("../../src/assets/icons/lib.png")} />
            <MaterialCommunityIcons
              name="book-open-page-variant-outline"
              color={color}
              size={35}
              style={{ height: 35, width: 35 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="qrdsdCode"
        component={QrCode}
        options={{
          tabBarLabel: false,
          tabBarIcon: ({ color }) => (
            // <ImageIcon source={require("../../src/assets/icons/qrcode.png")} />
            <MaterialCommunityIcons
              name="qrcode-scan"
              color={color}
              size={35}
              style={{ height: 35, width: 35 }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="profile"
        component={ProfileRoutes}
        options={{
          tabBarLabel: false,
          tabBarIcon: ({ color }) => (
            // <ImageIcon source={require("../../src/assets/icons/profile.svg")} />
            <MaterialCommunityIcons
              name="account-outline"
              color={color}
              size={35}
              style={{ height: 35, width: 35 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default ScreensComponents;
