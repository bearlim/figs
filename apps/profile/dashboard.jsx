import styled from "styled-components";
import React from "react";
import { View, Text } from "react-native";
import SimpleIcon from "react-native-vector-icons/SimpleLineIcons";
import AntDesign from "react-native-vector-icons/AntDesign";

export const Dashboard = ({ figsCount, ConqCount }) => {
  return (
    <>
      <DashboardContainerIcon>
        <Container>
          <IconContainer>
            <IconBorder>
              <SimpleIcon name="star" color="#ffffff" size={35} />
            </IconBorder>
            <ContainerText>
              <Text style={{ marginTop: 1, fontSize: 22 }}>{figsCount}</Text>
              <Text>Figurinhas</Text>
            </ContainerText>
          </IconContainer>

          <IconContainer>
            <IconBorder>
              <SimpleIcon name="trophy" color="#ffffff" size={35} />
            </IconBorder>
            <ContainerText>
              <Text style={{ marginTop: 1, fontSize: 22 }}>{ConqCount}</Text>
              <Text>Consquistas</Text>
            </ContainerText>
          </IconContainer>

          <IconContainer>
            <IconBorder>
              <AntDesign name="switcher" color="#ffffff" size={35} />
            </IconBorder>
            <ContainerText>
              <Text style={{ marginTop: 1, fontSize: 18 }}>Trocar</Text>
              <Text style={{ marginTop: 7 }}>Figurinhas</Text>
            </ContainerText>
          </IconContainer>
        </Container>
      </DashboardContainerIcon>
    </>
  );
};

const ContainerText = styled.View`
  align-items: center;
`;

const Container = styled.View`
  flex: 0.42;
  flex-direction: row;
  min-height: 12px;
`;

const DashboardContainerIcon = styled.View`
  display: flex;
  top: 170px;
  min-width: 100px;
`;

const IconBorder = styled.View`
  padding: 12px;
  background: hsl(340, 80%, 36.1%);
  align-items: center;
  border-radius: 50px;
  margin: 0px 35px;
`;

const IconContainer = styled.View`
  align-items: center;
`;
