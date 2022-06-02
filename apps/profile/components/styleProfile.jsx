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
import { Dashboard } from "./dashboard";
import {
  CircleProfileStyle,
  ContainerPicture,
  Pencil,
  BorderPencil,
  style,
} from "./components";
import styled from "styled-components";

export const CircleProfile = () => {
  return <CircleProfileStyle></CircleProfileStyle>;
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
      <Pencil style={style.Pencil}>
        <BorderPencil style={style.BorderPencil}>
          <Icon name="pencil" color="#311D3F" size={45} />
        </BorderPencil>
      </Pencil>
    </TouchableOpacity>
  );
};

const OnPressEditProfile = ({ idProfile }) => {
  Alert.alert(`${idProfile}`);
};

export const DashboardProfile = ({ figsCount, ConqCount }) => {
  return <Dashboard figsCount={figsCount} ConqCount={ConqCount} />;
};
