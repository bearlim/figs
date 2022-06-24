import React, { useContext } from "react";
import { View, SafeAreaView, FlatList, Text, StyleSheet, StatusBar, Button, Image } from "react-native";
import SimpleIcon from "react-native-vector-icons/SimpleLineIcons";
import {
  CircleProfile,
  CircleProfilePicture,
  ProfileName,
} from "../profile/components/styleProfile";
import AuthenticationContext from "../../src/contexts/authentication";
import { Container } from "../../style/global/styleGlobal";

const dataPreferencias = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Opção 1',
    iconName: 'folder',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Opção 2',
    iconName: 'flag',

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Opção 3',
    iconName: 'settings',

  },
];

const dataConteudos = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad42423bb28ba',
    title: 'Opção 11',
    iconName: 'folder',
  },
];

const Item = ({ title, iconName }) => (
  <View style={styles.item}>
    <SimpleIcon name={iconName} color="#ffffff" size={22} />

    <Text style={styles.title}>{title}</Text>
    <SimpleIcon name="arrow-right-circle" color="#ffffff" size={32} />

  </View>
);

const BoxConfig = ({ name, data }) => {

  const renderItem = ({ item }) => (
    <Item title={item.title} iconName={item.iconName} />
  );

  return <View style={styles.box}>
    <Text style={styles.section}> {name}</Text>

    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  </View>
}
function ConfigScreen({ }) {
  const { user } = useContext(AuthenticationContext);

  return (
    <View>
      <Container>
        <StatusBar color="auto" />
        <CircleProfile />
        <Container>
          <CircleProfilePicture uriPicture={user.image_url} />
        </Container>
        <View>
          <ProfileName nmUser={user.name} />
        </View>

      </Container>
      <Container></Container>

      <BoxConfig name={"Conteúdos"} data={dataConteudos}></BoxConfig>
      <BoxConfig name={"Preferências"} data={dataPreferencias}></BoxConfig>
    </View>
  );
}

const greyColor = '#708090';

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    //backgroundColor: '#f9c2ff',
    padding: 20,
    paddingRight: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row'
  },
  box: { 
    borderWidth: 1, 
    borderColor: greyColor, 
    paddingRight:10, 
    paddingLeft: 10 
  },
  title: {
    fontSize: 22,
  },

  section: {
    fontSize: 32,
    textAlign: "center", backgroundColor: greyColor,
  }

});

export default ConfigScreen;
