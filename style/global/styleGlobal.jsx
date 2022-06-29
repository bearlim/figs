import styled from "styled-components";
import { MaterialDialog } from "react-native-material-dialog";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { Button, Text } from "@react-native-material/core";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.View`
  display: flex;
  align-items: center;
  margin: 35px;
  top: ${(props) => (!!props.top ? props.top : 0)};
`;

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

export const StyledInput = ({
  placeholder,
  func,
  value,
  label,
  pass = false,
}) => {
  return (
    <>
      <Text
        style={{
          alignSelf: "flex-start",
          marginLeft: 10,
          color: "rgba(0, 0, 0, 0.397)",
          fontSize: 14,
        }}
      >
        {label}
      </Text>
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
    </>
  );
};

export const TitleApp = () => {
  return (
    <MaskedView
      maskElement={
        <Text
          style={[
            { fontSize: 48, fontWeight: "700" },
            { backgroundColor: "transparent" },
          ]}
        >
          figs.com
        </Text>
      }
    >
      <LinearGradient
        colors={[PrimaryColor, GradiantColor]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={[{ fontSize: 48, fontWeight: "700" }, { opacity: 0 }]}>
          figs.com
        </Text>
      </LinearGradient>
    </MaskedView>
  );
};

export const Br = () => {
  return <Text>{"\n"}</Text>;
};
