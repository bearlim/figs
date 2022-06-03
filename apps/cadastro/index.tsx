import React, { useState } from "react"
import { View, Text, TextInput, Pressable } from "react-native"
import { styles } from "./styles"

export function Cadastro(){

    const [nickname, setNickname] = useState('')

    function salvarNickName(){
        console.log('Apertei')
    }

    console.log(nickname)

    return(
        <>
            <View style={styles.container}>

                <View style={styles.boxInput}>
                    <Text style={styles.textLabel}>Nickname</Text>
                    <TextInput 
                        style={styles.inputText}
                        onChangeText={setNickname}
                        value={nickname}
                    ></TextInput>
                    <Pressable 
                        style={styles.buttonSave}
                        onPress={salvarNickName}
                    >
                        <Text style={styles.textButton}>Salvar</Text>
                    </Pressable>
                </View>
            </View>
        </>
    )
}