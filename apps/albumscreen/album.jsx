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
  TouchableFigs
} from "./components/albumStyle";

import Filter from './filter/filter'

const objImages = [
  {
    id: 1,
    figs: {
      uri: "https://avatars.githubusercontent.com/u/77466092?v=4",
      name: "Fig1",
      rarity: "Lendário",
      state: "ativo"
    },
  },
  {
    id: 2,
    figs: {
      uri: "https://avatars.githubusercontent.com/u/77466092?v=4",
      name: "Fig2",
      rarity: "Épica",
      state: "em lançamento"
    },
  },
];

export default function AlbumScreen({ navigation }) {
  return (
    <StyledScrollView>
      <BackgroundCircle />
      <ContainerTitleScreen>
        <TitleScreen>Meus Álbuns</TitleScreen>

      </ContainerTitleScreen>
      <Filter/>
      <AlbumContainer>
        {objImages.map((obj) => (
          <TouchableFigs
            key={obj.id}
            onPress={() => navigation.navigate("FigBios")}
          >
          <ImagesContainer >
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
