import React, { useState } from "react";
import { Image } from "react-native";
import { StyledInput, Br, DialogBox } from "../../style/global/styleGlobal";
import { FlatButton } from "../../components/button/button";
import { Container } from "./recuperarSenhaStyle";

export function ForgotPassScreen() {
  const [email, setEmail] = useState("");

  function salvarNickName() {}

  return (
    <Container>
      <Image source={require("./vetor.png")} />
      <Br />
      <StyledInput
        label="Digite seu E-mail para recuperação da senha"
        placeholder="Digite o seu e-mail"
        func={setEmail}
      />
      <FlatButton text="Recuperar" func={salvarNickName} />
    </Container>
  );
}
