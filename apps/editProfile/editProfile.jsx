import React, { useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { TerciaryColor } from "../../style/global/styleGlobal";
import { StyledInput } from "../../style/global/styleGlobal";
import { Container } from "./components/components";

export default function EditProfile({ route, navigation }) {
  const user = route.params;

  const [nome, setNome] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [senha, setSenha] = useState("");
  const [userName, setUserName] = useState("");
  const [dtNascimento, setNascimento] = useState("");

  const voltarPag = () => {};

  const atualizarInfo = () => {
    alert("Informações atualizadas.");
  };

  return (
    <Container>
      <Image style={styles.imagem} source={{ uri: user.image_url }} />

      <StyledInput func={setNome} value={user.name} label="Nome" />
      <StyledInput
        value={user.userName}
        func={setUserName}
        label="Apelido (Opcional)"
      />
      <StyledInput func={setEmail} value={user.email} label="Email" />
      <StyledInput pass={true} func={setSenha} label="Senha" />
      <StyledInput
        value={user.dtNascimento}
        func={setNascimento}
        label="Data de Nascimento"
      />

      <TouchableOpacity
        style={styles.btnAtualizar}
        onPress={() => atualizarInfo()}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          Atualizar Informações
        </Text>
      </TouchableOpacity>
    </Container>
  );
}

const styles = StyleSheet.create({
  btnAtualizar: {
    width: "100%",
    height: 40,
    backgroundColor: TerciaryColor,
    borderRadius: 20,
    justifyContent: "center",
    top: 30,
  },
  imagem: {
    width: 161,
    height: 161,
    borderRadius: (161 + 161) / 2,
    overflow: "hidden",
    borderWidth: 4,
    borderColor: "#BD1C07",
    bottom: 40,
  },
  appText: {
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: 15,
  },
});
