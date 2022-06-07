import React, { createContext, useState, useEffect } from "react";
import { SignIn } from "../services/authenticationService";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthenticationContext = createContext({});

export const AuthTunnel = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorage() {
      const response = await AsyncStorage.multiGet([
        "@RNAuth:user",
        "@RNAuth:token",
      ]);

      const dataUser = response[0][1];
      const dataToken = response[1][1];

      if (dataUser && dataToken) {
        setUser(JSON.parse(dataUser));
        setLoading(false);
      }
    }

    loadStorage();
  }, []);

  async function SignInRequest(userEmail, userPass) {
    const response = await SignIn(userEmail, userPass);

    const { token, user } = response;

    setUser(user);

    await AsyncStorage.setItem("@RNAuth:user", JSON.stringify(response.user));
    await AsyncStorage.setItem("@RNAuth:token", response.token);
  }

  {
    /*Falando para todos os contextos que tem acesso ao contexto de Autenticação*/
  }
  return (
    <AuthenticationContext.Provider
      value={{ signed: !!user, user, loading, SignInRequest }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContext;
