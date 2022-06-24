import React from "react";
import {
  AlbumContainer,
  ImagesContainer,
  StyledImagesLarge,
  StyledText,
  StyledScrollView,
  StyledSmallText,
  BackgroundCircle,
  TitleScreen,
  ContainerTitleScreen,
  FilterIcon,
  Touchable,
  TouchableFigs,
} from "./components/albumStyle";

const objImages = [
  {
    id: 1,
    figs: {
      uri: "https://avatars.githubusercontent.com/u/77466092?v=4",
      name: "Fig1",
      rarity: "Lendário",
    },
  },
  {
    id: 2,
    figs: {
      uri: "https://avatars.githubusercontent.com/u/77466092?v=4",
      name: "Fig2",
      rarity: "Épica",
    },
  },
];

export default function AlbumScreen({ navigation }) {
  return (
    <StyledScrollView>
      <BackgroundCircle />
      <ContainerTitleScreen>
        <TitleScreen>Meu album</TitleScreen>
        <Touchable>
          <FilterIcon source={require("../../src/assets/icons/filter.png")} />
        </Touchable>
      </ContainerTitleScreen>
      <AlbumContainer>
        {objImages.map((obj) => (
          <TouchableFigs
            key={obj.id}
            onPress={() => navigation.navigate("FigBios")}
          >
            <ImagesContainer>
              <StyledImagesLarge source={{ uri: obj.figs.uri }} />
              <StyledText>{obj.figs.name}</StyledText>
              <StyledSmallText>{obj.figs.rarity}</StyledSmallText>
            </ImagesContainer>
          </TouchableFigs>
        ))}
      </AlbumContainer>
    </StyledScrollView>
  );
}
