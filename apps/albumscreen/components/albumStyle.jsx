import { Dimensions } from "react-native";
import styled from "styled-components";
import { PrimaryColor } from "../../../style/global/styleGlobal";

export const AlbumContainer = styled.View`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  flex: 1;
  height: ${Dimensions.get("window").height}px;
`;

export const StyledScrollView = styled.ScrollView``;

export const ImagesContainer = styled.View`
  max-width: 170px;
  max-height: 170px;
  min-height: 170px;
  min-width: 170px;
  margin: 6px;
  flex-direction: column-reverse;
`;

export const StyledImagesLarge = styled.Image`
  min-height: 170px;
  min-width: 170px;
  border-radius: 45px;
`;

export const StyledText = styled.Text`
  margin-left: 25px;
  margin-bottom: 18px;
  position: absolute;
  color: white;
`;

export const StyledSmallText = styled.Text`
  margin-left: 35px;
  margin-bottom: 5px;
  position: absolute;
  font-size: 10px;
  color: white;
`;

export const BackgroundCircle = styled.View`
  border-radius: ${Math.round(
    Dimensions.get("window").width + Dimensions.get("window").height
  ) / 2}px;
  width: ${Dimensions.get("window").width * 3}px;
  height: ${Dimensions.get("window").width * 3}px;
  background: ${PrimaryColor};
  top: -690px;
  position: absolute;
  right: -100px;
`;

export const ContainerTitleScreen = styled.View`
  display: flex;
  margin-left: 50px;
  margin-right: 40px;
  margin-top: 45px;
  justify-content: center;
`;

export const TitleScreen = styled.Text`
  color: white;
  font-size: 20px;
`;

export const FilterIcon = styled.Image`
  width: 33px;
  height: 33px;
`;

export const Touchable = styled.TouchableOpacity`
  position: absolute;
  align-self: flex-end;
`;
