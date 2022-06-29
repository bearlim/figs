import React, { useState, useContext } from "react";
import { View, Text, TextInput, Pressable, StatusBar } from "react-native";
import AuthenticationContext from "../../src/contexts/authentication";
import {
  CircleProfilePicture,
  ProfileName,
} from "../profile/components/styleProfile";
import { styles } from "./components/registerStyle";
import {
  Container,
  InputContainer,
  ContainerTitle,
} from "./components/registerStyle";
import { StyledInput } from "../../style/global/styleGlobal";
import { FlatButton } from "../../components/button/button";
import { TitleApp } from "../../style/global/styleGlobal";

export function RegisterScreen() {
  const [nickname, setNickname] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confSenha, setConfSenha] = useState("");

  // const {user} = useContext(AuthenticationContext);

  function salvarCadastro() {
    console.log("Apertei");
  }

  return (
    <>
      <ContainerTitle>
        <TitleApp />
      </ContainerTitle>
      <Container>
        <InputContainer>
          <StyledInput
            label={"Nome"}
            placeholder={"Digite seu nome"}
            func={setNome}
          />
          <StyledInput
            label="Apelido (Opcional)"
            placeholder="Digite o seu apelido"
            func={setNickname}
          />
          <StyledInput
            label="E-mail"
            placeholder="Digite o seu E-mail"
            func={setEmail}
          />
          <StyledInput label="Senha" pass={true} func={setSenha} />
          <StyledInput
            label="Confirme sua senha"
            pass={true}
            func={setConfSenha}
          />

          <FlatButton text="CADASTRAR-SE" func={salvarCadastro} />
        </InputContainer>
      </Container>
    </>
  );
}
