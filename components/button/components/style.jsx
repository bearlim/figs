import styled from "styled-components";
import { PrimaryColor } from "../../../style/global/styleGlobal";

export const ContainerButton = styled.View`
  flex: 1;
  width: 150px;
  height: 59px;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.facebook ? "hsl(221, 80%, 41%)" : "#EEEDED")};
  border-radius: 17px;
`;

export const SubmissContainer = styled.View`
  align-self: center;
  margin-top: 25px;
  border-radius: 17px;
  background: ${PrimaryColor};
  width: 305px;
  height: 65px;
  justify-content: center;
`;
