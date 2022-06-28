import styled from "styled-components";
import { MaterialDialog } from "react-native-material-dialog";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { Button, Text } from "@react-native-material/core";

export const Container = styled.View`
  display: flex;
  align-items: center;
  margin: 35px;
`;

export const TextT = styled.Text``;

export const PrimaryColor = "hsl(30, 178%, 39%)";
export const SecundaryColor = "hsl(10, 84%, 39%)";
export const TerciaryColor = "hsl(23, 98%, 43%)";
export const QuartenaryColor = "hsl(47, 93%, 48%)";
export const GradiantColor = "#4d2b04";

export const DialogBox = ({ func, event, title, text }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button
        title={event}
        color="#EBE4F0"
        style={{ width: 350 }}
        tintColor="red"
        onPress={() => {
          setVisible(true);
        }}
      />
      <MaterialDialog
        title={title}
        visible={visible}
        onOk={() => {
          func();
        }}
        onCancel={() => setVisible(false)}
      >
        <Text>{text}</Text>
      </MaterialDialog>
    </>
  );
};

export const StyledInput = ({ placeholder, func, value, pass = false }) => {
  return (
    <TextInput
      style={{
        borderWidth: 1,
        borderColor: " rgba(0, 0, 0, 0.39)",
        borderRadius: 14,
        height: 40,
        paddingLeft: 15,
        marginTop: 10,
        marginBottom: 10,
        width: "100%",
      }}
      placeholder={placeholder}
      onChangeText={(text) => func(text)}
      value={value}
      secureTextEntry={pass}
    />
  );
};
