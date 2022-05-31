import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleIcon from "react-native-vector-icons/SimpleLineIcons";
import Octicons from "react-native-vector-icons/Octicons";
import { Dashboard } from "./dashboard";
import styled from "styled-components";

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
    <ContainerPicture>
      <Image
        style={style.Picture}
        source={{
          uri: uriPicture,
        }}
      />
    </ContainerPicture>
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
    <TouchableOpacity onPress={OnPressEditProfile}>
      <View style={style.Pencil}>
        <View style={style.BorderPencil}>
          <Icon name="pencil" color="#311D3F" size={45} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const OnPressEditProfile = ({ idProfile }) => {
  Alert.alert(`${idProfile}`);
};

export const DashboardProfile = ({ figsCount, ConqCount }) => {
  return <Dashboard figsCount={figsCount} ConqCount={ConqCount} />;
};

const ContainerPicture = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #e23e57;
  padding: 7px;
  border-radius: ${Math.round(
    Dimensions.get("window").width + Dimensions.get("window").height
  ) / 2}px;
  max-width: ${Math.round(Dimensions.get("window").width) * 1.5}px;
  max-height: ${Math.round(Dimensions.get("window").height) * 0.2}px;
`;

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

  Pencil: {
    backgroundColor: "#000",
    padding: 2,
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
    top: 20,
  },

  BorderPencil: {
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
    width: Dimensions.get("window").width * 0.15,
    height: Dimensions.get("window").width * 0.15,
    backgroundColor: "hsl(351, 80%, 56%)",
    justifyContent: "center",
    alignItems: "center",
    opacity: 60,
  },

  ContainerDashBoard: {
    flex: 1,
    top: 180,
    // replica do dysplay inline
    flexWrap: "wrap",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  BorderIconDashboard: {
    backgroundColor: "hsl(340, 80%, 36.1%)",
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
    height: 63,
    width: 63,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  IconsDashboard: {
    alignSelf: "center",
  },
});
