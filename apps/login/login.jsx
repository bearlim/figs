import React, { useContext } from "react";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";
import { FlatButton, SocialMediaButton } from "../../components/button/button";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import {
  BrandTitleView,
  FormLogin,
  ContainerButtons,
  ButtonsContainer,
  ContainerForgotPassword,
  style,
} from "./components/style";
import AuthenticationContext from "../../src/contexts/authentication";

const LoginScreen = () => {
  const [userEmail, userEmailSet] = React.useState();
  const [userPass, userPassSet] = React.useState();

  const { signed, SignInRequest } = useContext(AuthenticationContext);

  const eventoParaCadastrar = () => {
    Alert.alert("Evento para cadastrar");
  };

  const onSubmissLogin = () => {
    SignInRequest(userEmail, userPass);
  };

  return (
    <ScrollView>
      <BrandTitleView>
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
      </BrandTitleView>
      <BrandTitleView>
        <Text style={style.optionChoice}>Escolha uma opção para entrar</Text>
      </BrandTitleView>
      <View></View>

      {/* Form's inputs */}
      <FormLogin>
        <Text style={{ marginLeft: 10, color: "rgba(0, 0, 0, 0.397)" }}>
          Email
        </Text>
        <TextInput
          style={style.inputBorder}
          onChangeText={userEmailSet}
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
          onChangeText={userPassSet}
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
        <FlatButton text="ENTRAR" func={onSubmissLogin} />

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
        <ContainerButtons>
          <ButtonsContainer>
            <SocialMediaButton social_media="logo-facebook" color="white" />
            <SocialMediaButton social_media="logo-google" color="black" />
          </ButtonsContainer>
        </ContainerButtons>
        <ContainerForgotPassword>
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
        </ContainerForgotPassword>
      </FormLogin>
    </ScrollView>
  );
};

export default LoginScreen;
