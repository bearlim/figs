import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

const GoogleButton = ({ func }) => {
  return (
    <TouchableOpacity onPress={func}>
      <View style={style.container}>
        <Icon.Button
          name="logo-google"
          size={28}
          color="black"
          backgroundColor="transparent"
        />
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: 150,
    height: 59,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EEEDED",
    borderRadius: 17,
  },
});

export default GoogleButton;
