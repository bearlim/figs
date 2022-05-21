import React from "react";
import {
  Text,
  View,
  ScrollView,
  Button,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";
import FlatButton from "../../components/button/button";
import FacebookButton from "../../components/button/facebook/button";
import GoogleButton from "../../components/button/google/button";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

const LoginScreen = ({ navigation }) => {
  const [dsEmail, dsEmailSet] = React.useState();
  const [dsSenha, dsSenhaSet] = React.useState();

  const onSubmiss = () => {
    Alert.alert(dsEmail + " " + dsSenha);
  };

  const eventoParaCadastrar = () => {
    Alert.alert("Evento para cadastrar");
  };

  return (
    <ScrollView>
      <View style={style.brandTitleView}>
        <MaskedView
          maskElement={
            <Text
              style={[style.brandTitle, { backgroundColor: "transparent" }]}
            >
              globofigs.com
            </Text>
          }
        >
          <LinearGradient
            colors={["hsl(340, 80%, 36.1%)", "#311D3F"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={[style.brandTitle, { opacity: 0 }]}>
              globofigs.com
            </Text>
          </LinearGradient>
        </MaskedView>
      </View>
      <View style={style.brandTitleView}>
        <Text style={style.optionChoice}>Escolha uma opção para entrar</Text>
      </View>
      <View></View>

      {/* Form's inputs */}
      <View style={style.formLogin}>
        <Text style={{ marginLeft: 10, color: "rgba(0, 0, 0, 0.397)" }}>
          Email
        </Text>
        <TextInput
          style={style.inputBorder}
          onChangeText={dsEmailSet}
          placeholder="Digite o seu e-mail"
        />

        <Text
          style={{
            marginLeft: 10,
            marginTop: 10,
            color: "rgba(0, 0, 0, 0.397)",
          }}
        >
          Senha
        </Text>
        <TextInput
          style={style.inputBorder}
          onChangeText={dsSenhaSet}
          secureTextEntry={true}
          placeholder="Digite sua senha"
        />

        <Text
          style={{
            alignSelf: "center",
            marginTop: 35,
            color: "hsl(340, 60%, 36.1%)",
          }}
        >
          {" "}
          ESQUECEU A SENHA?
        </Text>
        <FlatButton
          text="ENTRAR"
          func={() => navigation.navigate("ProfileScreen")}
        />

        <Text
          style={{
            alignSelf: "center",
            marginTop: 30,
            marginBottom: 30,
            color: "rgba(0, 0, 0, 0.31)",
          }}
        >
          Ou
        </Text>
        <View
          style={{
            flexWrap: "wrap",
            alignItems: "flex-start",
            flexDirection: "row",
            marginLeft: 15,
          }}
        >
          <View style={{}}>
            <FacebookButton />
          </View>
          <Text>{"\n"}</Text>
          <Text>{"\n"}</Text>
          <Text>{"\n"}</Text>
          <GoogleButton />
        </View>

        <View style={style.vwEsqueceuSenha}>
          <TouchableOpacity onPress={eventoParaCadastrar}>
            <Text style={style.btEsqueceuSenha}>
              Não possui login?
              <Text
                style={{ color: "hsl(340, 80%, 36.1%)", fontWeight: "700" }}
              >
                {" "}
                CADASTRE-SE
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  brandTitleView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
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

export default LoginScreen;
