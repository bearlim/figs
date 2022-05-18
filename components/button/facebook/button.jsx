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
          style={{ marginLeft: 9 }}
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
    backgroundColor: "	hsl(221, 80%, 41%)",
    borderRadius: 17,
  },
});

export default FacebookButton;
