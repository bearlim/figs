import styled from "styled-components";
import { StyleSheet, View } from "react-native";

export const BrandTitleView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const FormLogin = styled.View`
  flex: 1;
  margin-left: 31px;
  margin-right: 31px;
  margin-top: 40px;
`;

export const ContainerButtons = styled.View`
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: row;
  margin-left: 15px;
`;

export const ButtonsContainer = styled.View`
  flex: 1;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;

export const ContainerForgotPassword = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const style = StyleSheet.create({
  brandTitle: {
    fontSize: 48,
    fontWeight: "700",
  },
  optionChoice: {
    color: "rgba(0, 0, 0, 0.31)",
    fontSize: 22,
  },

  formLogin: {
    flex: 1,
    marginLeft: 31,
    marginRight: 31,
    marginTop: 40,
  },

  inputBorder: {
    borderWidth: 1,
    borderColor: " rgba(0, 0, 0, 0.39)",
    borderRadius: 14,
    height: 40,
    paddingLeft: 15,
    marginTop: 10,
  },

  Login: {
    width: 300,
    height: 65,
    alignSelf: "center",
    marginTop: 55,
    borderRadius: 18,
  },

  btLogin: {
    height: 65,
  },

  vwEsqueceuSenha: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },

  btEsqueceuSenha: {
    color: "rgba(0, 0, 0, 0.31)",
    fontSize: 20,
  },
});
