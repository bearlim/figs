import React, { useContext } from "react";
import { StyledText, Touchable } from "./components/configStyle";
import { Flex, Wrap, Box, Divider } from "@react-native-material/core";
import AuthenticationContext from "../../src/contexts/authentication";
import { DialogBox } from "../../style/global/styleGlobal";

const ConfigScreen = () => {
  const LogOff = () => {};
  const { SignOutRequest } = useContext(AuthenticationContext);

  return (
    <Flex fill inline center>
      <Wrap>
        <Box>
          <DialogBox
            func={SignOutRequest}
            title="Sair"
            text={
              "Tem certeza que deseja sair? Será necessário fazer o login novamente"
            }
            event="Sair"
          />
        </Box>
      </Wrap>
    </Flex>
  );
};

export default ConfigScreen;
