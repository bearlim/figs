import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { styles } from "./components/cadastroStyles";

export function Cadastro() {
  const [nickname, setNickname] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  function salvarNickName() {
    console.log("Apertei");
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.boxInput}>
          <Text style={styles.textLabel}>Nickname</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={setNickname}
            value={nickname}
          ></TextInput>

          <Text style={styles.textLabel}>Nome</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={setNome}
            value={nome}
          ></TextInput>

          <Text style={styles.textLabel}>E-mail</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={setEmail}
            value={email}
          ></TextInput>

          <Pressable style={styles.buttonSave} onPress={salvarNickName}>
            <Text style={styles.textButton}>Salvar</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}
