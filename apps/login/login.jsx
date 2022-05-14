import React from "react";
import LinearGradient from "react-native-linear-gradient";
import {
  Text,
  View,
  ScrollView,
  Button,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import FlatButton from "../../components/button/button";

const LoginScreen = ({ navigation }) => {
  const [dsEmail, dsEmailSet] = React.useState();
  const [dsSenha, dsSenhaSet] = React.useState();

  return (
    <ScrollView>
      <View style={style.brandTitleView}>
        <Text style={style.brandTitle}>globofigs.com</Text>
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
        <TextInput style={style.inputBorder} onChangeText={dsEmailSet} />

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
        />

        <Text style={{ alignSelf: "center", marginTop: 35, color: "#88304E" }}>
          {" "}
          ESQUECEU A SENHA?
        </Text>
        <View style={{ alignSelf: "center", marginTop: 25 }}>
          <FlatButton text="ENTRAR" />
        </View>
        <View style={{ borderBottomColor: "black", borderBottomWidth: 1 }} />
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  brandTitleView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
  brandTitle: {
    fontSize: 48,
  },
  optionChoice: {
    color: "rgba(0, 0, 0, 0.31)",
    fontSize: 22,
  },

  formLogin: {
    flex: 1,
    marginLeft: 31,
    marginRight: 31,
    marginTop: 70,
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
});

export default LoginScreen;
