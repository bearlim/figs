import { StyleSheet } from "react-native";
import { PrimaryColor } from "../../../style/global/styleGlobal";

export const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    width: "100%",
    height: "100%",
  },
  boxInput: {
    width: "90%",
    marginHorizontal: 20,
    top: 200,
  },
  textLabel: {
    margin: 10,
  },
  inputText: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
  },
  buttonSave: {
    backgroundColor: `${PrimaryColor}`,
    padding: 15,
    marginTop: 50,
    borderRadius: 6,
  },
  textButton: {
    textAlign: "center",
    color: "white",
  },
});
