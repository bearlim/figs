import React, { useContext } from "react";
import AuthRoutes from "./auth.route";
import AppRoutes from "./app.route";
import AuthenticationContext from "../contexts/authentication";

const Routes = () => {
  const { signed, loading } = useContext(AuthenticationContext);

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
