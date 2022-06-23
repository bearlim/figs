import React from "react";
import { View, Text, Button, Image } from "react-native";

function FigurinhaScreen({ navigation }) {
  return (
    <View>
      <Image
          style={{ width: 400, height: 450, marginTop: 50 }}
          source={require("../assets/neymar.jpeg")}
        />
              <Text style={{ marginTop: 1, fontSize: 30 }}>Neymar Jr, 30</Text>

              <Text>Jogador de Futebol</Text>
              <Text>Raridade: lendário</Text>
              <Text>Álbum: futebol</Text>

              <Text style={{ marginTop: 1, fontSize: 25 }}>Sobre</Text>
              <Text>orem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu luctus sapien. Integer at suscipit erat. Morbi a rhoncus ante. Sed volutpat euismod elit, non lobortis augue mattis non. Etiam vitae odio efficitur, feugiat arcu sed, hendrerit nisi. Quisque eget hendrerit tortor. Phasellus vestibulum est quis tortor viverra posuere. Donec interdum lectus vitae mi blandit elementum. Curabitur bibendum diam at vulputate tincidunt.</Text>
    </View>
  );
}

export default FigurinhaScreen;
