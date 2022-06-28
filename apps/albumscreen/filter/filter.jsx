import { Button, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import AlbumScreen from "../album"; 
import { Stack, Chip } from "@react-native-material/core";
import { ContainerBt } from './filterStyle'
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";




export default function Filter() {
  const [clicked, setclicked] = useState(false)

  // function filtering() {
  //   const [filtredStates, setFiltredStates] = useState(null);
  //   useEffect(() => {
  //     setFiltredStates(getStates());
  //   });
  // }

  // function takeState(e){
  //   let state = e.target.value;
  //   state !== "all"
  //     ? setFiltredState(filterState(state))
  //     : setFiltredState(getState());
  // }

  function handlePress(){
    // clicked = !clicked
    setclicked(!clicked)
  }

  return (
    <View>
      
      <ScrollView showsHorizontalScrollIndicator={false} horizontal = {true}>
          <Stack style={{paddingTop: 10, paddingLeft: 10}} direction="row" fill center spacing={15}>
      <Chip onPress= {()=> handlePress()} variant={clicked ? "outlined" : "filled"} label="Concluídos" />
      <Chip variant="outlined" label="Recentes" />
      <Chip variant="outlined" label="Finalizados" />
      <Chip variant="outlined" label="cagado" />
          </Stack>
      </ScrollView>
      
    </View>
  );
}


