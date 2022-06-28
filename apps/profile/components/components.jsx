import styled from "styled-components";
import { Dimensions, StyleSheet } from "react-native";
import {
  PrimaryColor,
  SecundaryColor,
  TerciaryColor,
} from "../../../style/global/styleGlobal";

export const CircleProfileStyle = styled.View`
  border-radius: ${Math.round(
    Dimensions.get("window").width + Dimensions.get("window").height
  ) / 2}px;
  width: ${Dimensions.get("window").width * 2}px;
  height: ${Dimensions.get("window").width * 2}px;
  background: ${PrimaryColor};
  justify-content: center;
  align-items: center;
  top: -470px;
  position: absolute;
`;

export const ContainerPicture = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${SecundaryColor};
  padding: 7px;
  border-radius: ${320 / 2}px;
  max-width: 160px;
  max-height: 160px;
`;

export const Pencil = styled.View`
  background: #000;
  padding: 2px;
  border-radius: ${Math.round(
    Dimensions.get("window").width + Dimensions.get("window").height
  ) / 2}px;
  top: 20px;
`;

export const BorderPencil = styled.View`
  border-radius: ${Math.round(
    Dimensions.get("window").width + Dimensions.get("window").height
  ) / 2}px;
  width: ${Dimensions.get("window").width * 0.15}px;
  height: ${Dimensions.get("window").width * 0.15}px;
  background: ${TerciaryColor};
  justify-content: center;
  align-items: center;
  opacity: 60;
`;

export const style = StyleSheet.create({
  Picture: {
    height: 150,
    width: 150,
    alignSelf: "center",
    borderRadius: 300 / 2,
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
    backgroundColor: `${TerciaryColor}`,
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

export const ContainerText = styled.View`
  align-items: center;
`;

export const Container = styled.View`
  flex: 0.42;
  flex-direction: row;
  min-height: 12px;
`;

export const DashboardContainerIcon = styled.View`
  display: flex;
  top: 170px;
  min-width: 100px;
`;

export const IconBorder = styled.View`
  padding: 12px;
  background: ${TerciaryColor};
  align-items: center;
  border-radius: 50px;
  margin: 0px 35px;
`;

export const IconContainer = styled.View`
  align-items: center;
`;
