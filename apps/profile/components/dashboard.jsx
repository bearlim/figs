import React from "react";
import { Text, TouchableWithoutFeedback, Alert } from "react-native";
import SimpleIcon from "react-native-vector-icons/SimpleLineIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import {
  ContainerText,
  Container,
  DashboardContainerIcon,
  IconBorder,
  IconContainer,
} from "./components";

export const Dashboard = ({ figsCount, ConqCount, navigation }) => {
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
              <Text >Figurinhas</Text>
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

          <TouchableWithoutFeedback onPress={()=> navigation.navigate('FigurinhaScreen')}>
            <IconContainer>
              <IconBorder>
                <AntDesign name="switcher" color="#ffffff" size={35} />
              </IconBorder>
              <ContainerText>
                <Text style={{ marginTop: 1, fontSize: 18 }}>Trocar</Text>
                <Text style={{ marginTop: 7 }}>Figurinhas</Text>
              </ContainerText>
            </IconContainer>
          </TouchableWithoutFeedback>
        </Container>
      </DashboardContainerIcon>
    </>
  );
};
