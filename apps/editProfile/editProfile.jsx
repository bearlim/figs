import React, { useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { TerciaryColor } from "../../style/global/styleGlobal";

export default function EditProfile({ route, navigation }) {
  const user = route.params;

  const [nome, setNome] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [senha, setSenha] = useState("");
  const [userName, setProfile] = useState("");
  const [dtNascimento, setNascimento] = useState("");

  const voltarPag = () => {};

  const atualizarInfo = () => {
    alert("Informações atualizadas.");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btnVoltar}
        onPress={() => voltarPag()}
      ></TouchableOpacity>
      <Text style={styles.btnVoltar}></Text>

      <Image style={styles.imagem} source={{ uri: user.image_url }} />

      <Text style={styles.appText}>Nome</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setNome(text)}
        value={user.name}
      />
      <Text style={styles.appText}>Usuário</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setProfile(text)}
      />
      <Text style={styles.appText}>E-mail</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setEmail(text)}
        value={user.email}
      />
      <Text style={styles.appText}>Senha</Text>
      <TextInput
        secureTextEntry={true}
        style={styles.textInput}
        onChangeText={(text) => setSenha(text)}
      />
      <Text style={styles.appText}>Data de Nascimento</Text>
      <TextInput
        secureTextEntry={true}
        style={styles.textInput}
        onChangeText={(text) => setNascimento(text)}
      />

      <TouchableOpacity
        style={styles.btnAtualizar}
        onPress={() => atualizarInfo()}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          Atualizar Informações
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  textInput: {
    width: "100%",
    height: 40,
    backgroundColor: "white",
    borderRadius: 20,
    paddingLeft: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "rgba(158,150,150,.5)",
  },
  btnAtualizar: {
    width: "100%",
    height: 40,
    backgroundColor: TerciaryColor,
    borderRadius: 20,
    justifyContent: "center",
  },
  imagem: {
    width: 161,
    height: 161,
    borderRadius: (161 + 161) / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "#BD1C07",
    bottom: 40,
  },
  appText: {
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
});
