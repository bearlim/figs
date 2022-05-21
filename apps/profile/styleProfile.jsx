import React from "react";
import { View, StyleSheet, Dimensions, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export const CircleProfile = () => {
  return (
    <View
      style={[
        style.CircleProfile,
        style.CircleShadow,
        { position: "absolute" },
      ]}
    ></View>
  );
};

export const CircleProfilePicture = ({ uriPicture }) => {
  return (
    <View style={style.ContainerPicture}>
      <View style={{ flex: 0.3, justifyContent: "center" }}>
        <Image
          style={style.Picture}
          source={{
            uri: uriPicture,
          }}
        />
      </View>
    </View>
  );
};

export const ProfileName = ({ nmUser }) => {
  return (
    <>
      <Text style={style.ProfileNameStyle}>{nmUser}</Text>
    </>
  );
};

export const EditProfile = ({ idProfile }) => {
  return (
    <View style={[{ top: 30 }]}>
      <View>
        <Icon name="pencil" size={40} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  CircleProfile: {
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
    width: Dimensions.get("window").width * 2,
    height: Dimensions.get("window").width * 2,
    backgroundColor: "hsl(340, 80%, 36.1%)",
    justifyContent: "center",
    alignItems: "center",
    top: -470,
  },

  ContainerPicture: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#E23E57",
    padding: 7,
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
    maxHeight: Dimensions.get("window").height * 0.2,
    maxWidth: Dimensions.get("window").width * 1.5,
    justifyContent: "center",
    alignItems: "center",
  },

  Picture: {
    height: 150,
    width: 150,
    alignSelf: "center",
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
  },

  CircleShadow: {
    shadowColor: "#171717",
    shadowOffset: { width: 50, height: 50 },
    shadowOpacity: 100,
    shadowRadius: 50,
  },

  ProfileNameStyle: {
    color: "white",
    fontWeight: "500",
    fontSize: 23,
    top: -20,
  },
});
