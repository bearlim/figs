import React, { useState } from "react"
import { View, Text, TextInput, Pressable, Image } from "react-native"
import { styles } from "./recuperarSenhaStyle"

export function Teste(){

    const [nickname, setNickname] = useState('')
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')

    function salvarNickName(){
        console.log('Apertei')
    }

    return(
        <>
            <View style={styles.container}>

                <View style={styles.boxInput}>
  
                    <Image
                    
                    source={require('./vetor.png')}

                    />

                    <Text style={styles.textLabel}>Digite seu E-mail para recuperação da senha</Text>
                    <TextInput 
                        style={styles.inputText}
                        onChangeText={setEmail}
                        value={email}
                    ></TextInput>

                    <Pressable 
                        style={styles.buttonSave}
                        onPress={salvarNickName}
                    >
                        <Text style={styles.textButton}>Enviar</Text>
                    </Pressable>
                </View>
            </View>
        </>
    )
}
