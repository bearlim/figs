import React, { useContext } from "react";
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
  StatusBar,
  Button,
  Image,
} from "react-native";
import SimpleIcon from "react-native-vector-icons/SimpleLineIcons";
import {
  CircleProfile,
  CircleProfilePicture,
  ProfileName,
} from "../profile/components/styleProfile";
import AuthenticationContext from "../../src/contexts/authentication";
import { Container, DialogBox } from "../../style/global/styleGlobal";
import { ScrollView } from "react-native-gesture-handler";

const dataPreferencias = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Opção 1",
    iconName: "folder",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Opção 2",
    iconName: "eye",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Opção 3",
    iconName: "question",
  },
];

const dataConteudos = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad42423bb28ba",
    title: "Opção 11",
    iconName: "picture",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad42423badasdasfa",
    title: "Opção 11",
    iconName: "user",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3adsadasda23bb28ba",
    title: "Opção 11",
    iconName: "lock",
  },
];

const Item = ({ title, iconName }) => (
  <View style={styles.item}>
    <SimpleIcon name={iconName} style={styles.iconOptions} size={22} />

    <Text style={styles.title}>{title}</Text>
    <SimpleIcon name="arrow-right" style={styles.iconNext} size={15} />
  </View>
);

const BoxConfig = ({ name, data }) => {
  const renderItem = ({ item }) => (
    <Item title={item.title} iconName={item.iconName} />
  );

  return (
    <View style={styles.box}>
      <Text style={styles.section}> {name} </Text>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
function ConfigScreenT({}) {
  const { user, SignOutRequest } = useContext(AuthenticationContext);

  return (
    <ScrollView>
      <Container>
        <StatusBar color="auto" />
        {/* <CircleProfile /> */}

        <View>
          <CircleProfilePicture uriPicture={"user.image_url"} />
        </View>

        <View style={{ alignItems: "center" }}>
          <Text style={styles.userNametitle}>@Barleam</Text>
          <Text style={styles.userEmailtitle}>Yuri@gmail.com</Text>
        </View>

        <View style={styles.editProfileButton}>
          <Text style={styles.titleEditProfile}>Editar Perfil</Text>
          <SimpleIcon
            name="arrow-right"
            style={styles.iconNextEdit}
            size={15}
          />
        </View>
      </Container>

      <BoxConfig name={"CONTEÚDOS"} data={dataConteudos}></BoxConfig>
      <BoxConfig name={"PREFERÊNCIAS"} data={dataPreferencias}></BoxConfig>

      <DialogBox
        func={SignOutRequest}
        title="Sair"
        text={
          "Tem certeza que deseja sair? Será necessário fazer o login novamente"
        }
        event="Sair"
      />
    </ScrollView>
  );
}

const greyColor = "#708090";

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 10,
    flexDirection: "row",
    paddingLeft: 37,
    marginTop: 7,
  },

  box: {
    paddingRight: 10,
    paddingLeft: 10,
  },

  title: {
    fontSize: 20,
    paddingLeft: 10,
    width: 100,
  },

  section: {
    fontSize: 25,
    backgroundColor: "rgba(109, 109, 109, 0.38)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingLeft: 30,
    paddingVertical: 9,
    alignItems: "center",
  },

  iconNext: {
    backgroundColor: "rgba(185, 45, 16, 0.63)",
    borderRadius: 100,
    padding: 5,
  },

  iconOptions: {
    color: "rgba(5, 0, 56, 0.5)",
  },

  editProfileButton: {
    backgroundColor: "rgba(185, 45, 16, 1)",
    flexDirection: "row",
    padding: 8,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    marginTop: 15,
  },

  titleEditProfile: {
    color: "white",
    fontSize: 20,
    paddingHorizontal: 10,
  },

  iconNextEdit: {
    backgroundColor: "rgba(255, 255, 255, 0.21)",
    borderRadius: 20,
    padding: 5,
    shadowOffset: { width: 4, height: 10 },
    shadowColor: "rgba(255, 255, 255, 0.21)",
  },

  userNametitle: {
    fontSize: 40,
  },
  userEmailtitle: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default ConfigScreenT;
