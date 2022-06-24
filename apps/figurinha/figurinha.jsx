import React from "react";
import { View, Text, Button, Image } from "react-native";
<<<<<<< HEAD
import { Textopadrao, Titulofig, BoxInfo, InfosDetalhes, TextSobre, BoxSobre } from './style';
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import FontAwesome from "react-native-vector-icons/FontAwesome";
=======
>>>>>>> 96f399d72209031f2efd3d5449e79200e1ca22a7

function FigurinhaScreen({ navigation }) {
  return (
    <View>
      <Image
          style={{ width: 400, height: 450, marginTop: 50 }}
          source={require("../assets/neymar.jpeg")}
        />
<<<<<<< HEAD
              <BoxInfo>
                <Titulofig>
                  <Text style={{ marginTop: 1, fontSize: 30, marginRight: 8, color:"rgba(0,0,0,0.76)" }}>Neymar Jr, 30</Text>
                  <FontAwesome name={'diamond'} size={18} color={'#FFD233'}></FontAwesome>
                </Titulofig>
                <InfosDetalhes>
                  <Ionicons name={'football'} color={"rgba(0,0,0,0.6)"} size={16}></Ionicons>
                  <Text style={{marginLeft: 4}}>Jogador de Futebol</Text>
                </InfosDetalhes>
                <InfosDetalhes>
                  <Ionicons name={'md-star-sharp'} color={"rgba(0,0,0,0.6)"}  size={16}></Ionicons>
                  <Text style={{marginLeft: 4}}>Raridade: lendário</Text>
                </InfosDetalhes>
                <InfosDetalhes>
                  <MaterialCommunityIcons name={'book-outline'} color={"rgba(0,0,0,0.6)"}  size={16}></MaterialCommunityIcons>
                  <Text style={{marginLeft: 4}}>Álbum: futebol</Text>
                </InfosDetalhes>

                <BoxSobre>
                  <Text style={{ marginBottom: 4, fontSize: 25 }}>Sobre</Text>
                  <TextSobre>
                    <Text style={{textAlign: "justify"}}>orem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu luctus sapien. Integer at suscipit erat. Morbi a rhoncus ante. Sed volutpat euismod elit, non lobortis augue mattis non. Etiam vitae odio efficitur, feugiat arcu sed, hendrerit nisi. Quisque eget hendrerit tortor. Phasellus vestibulum est quis tortor viverra posuere. Donec interdum lectus vitae mi blandit elementum. Curabitur bibendum diam at vulputate tincidunt.</Text>
                  </TextSobre>
                </BoxSobre>


              </BoxInfo>
              
              

=======
              <Text style={{ marginTop: 1, fontSize: 30 }}>Neymar Jr, 30</Text>

              <Text>Jogador de Futebol</Text>
              <Text>Raridade: lendário</Text>
              <Text>Álbum: futebol</Text>

              <Text style={{ marginTop: 1, fontSize: 25 }}>Sobre</Text>
              <Text>orem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu luctus sapien. Integer at suscipit erat. Morbi a rhoncus ante. Sed volutpat euismod elit, non lobortis augue mattis non. Etiam vitae odio efficitur, feugiat arcu sed, hendrerit nisi. Quisque eget hendrerit tortor. Phasellus vestibulum est quis tortor viverra posuere. Donec interdum lectus vitae mi blandit elementum. Curabitur bibendum diam at vulputate tincidunt.</Text>
>>>>>>> 96f399d72209031f2efd3d5449e79200e1ca22a7
    </View>
  );
}

export default FigurinhaScreen;
