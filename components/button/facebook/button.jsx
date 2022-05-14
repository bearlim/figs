import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { TouchableOpacity, StyleSheet, View } from "react-native";

const FacebookButton = ({ func }) => {
  return (
    <TouchableOpacity onPress={func}>
      <View style={style.container}>
        <Icon.Button
          name="logo-facebook"
          size={28}
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
    backgroundColor: "#3B5998",
    borderRadius: 14,
  },
});

export default FacebookButton;
