import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { ContainerButton, SubmissContainer } from "./components/style";
import Icon from "react-native-vector-icons/Ionicons";

export const FlatButton = ({ text, func }) => {
  return (
    <TouchableOpacity onPress={func}>
      <SubmissContainer>
        <Text style={style.buttonText}>{text}</Text>
      </SubmissContainer>
    </TouchableOpacity>
  );
};

export const SocialMediaButton = ({ social_media, color, func }) => {
  if (social_media == "logo-facebook") {
    return (
      <TouchableOpacity onPress={func}>
        <ContainerButton facebook>
          <Icon
            name={social_media}
            size={28}
            color={color}
            backgroundColor="transparent"
          />
        </ContainerButton>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity onPress={func}>
        <ContainerButton>
          <Icon
            name={social_media}
            size={28}
            color={color}
            backgroundColor="transparent"
          />
        </ContainerButton>
      </TouchableOpacity>
    );
  }
};

const style = StyleSheet.create({
  buttonText: {
    color: "#FFFFFF",
    alignSelf: "center",
    fontWeight: "800",
  },
});
