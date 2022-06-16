import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import Home from '../home/home';
import Profile from '../profile/profile';
import QrCode from '../qrCode/Scanner'


//Screen names
// const homeName = "home";
// const detailsName = "Details";
// const settingsName = "Settings";

const Tab = createBottomTabNavigator();

function NavBar() {
  return (

      <Tab.Navigator
        // initialRouteName={homeName}
        screenOptions={({ route }) => ({
            headerShown: false,
            title: '*',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === 'profile' ) {
              iconName = focused ? 'person-outline' : 'person-outline';
              

            } else if (rn === 'home'  ) {
              iconName = focused ? 'book-outline' : 'book-outline';

            } else if (rn === 'qrCode' ) {
              iconName = focused ? 'qr-code-outline' : 'qr-code-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          tabStyle:{
            backgroundColor:'#EBE4F0',
            // height: 75
          },

          activeTintColor: '#60160D',
          inactiveTintColor: '#D85502',
          // labelStyle: { paddingBottom: 10, fontSize: 10 },
          // style: { backgroundColor: 'black' },
          // padding: 10, height: 70, 
        }}>

        <Tab.Screen name='qrCode' component={QrCode}/> 
        <Tab.Screen name= 'home'  component={Home} />
        <Tab.Screen name= 'profile' component={Profile} /> 
        

      </Tab.Navigator>

  );
}

export default NavBar;
