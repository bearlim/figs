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

export const DashboardProfile = ({ figsCount, ConqCount, navigation }) => {
  return <Dashboard figsCount={figsCount} ConqCount={ConqCount} navigation={navigation} />;
};

export const Touchable = styled.TouchableOpacity`
  position: absolute;
  align-self: flex-end;
  margin-top: 15px;
`;

export const ConfigIcon = styled.Image`
  width: 33px;
  height: 33px;
`;
