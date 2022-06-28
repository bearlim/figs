import React, { useState, useContext } from "react"
import { View, Text, TextInput, Pressable, StatusBar } from "react-native"
import AuthenticationContext from "../../src/contexts/authentication"
import { Container } from "../profile/components/components"
import { CircleProfilePicture, ProfileName } from "../profile/components/styleProfile"
import { styles } from "./components/registerStyle"

export function RegisterScreen(){

    const [nickname, setNickname] = useState('')
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confSenha, setConfSenha] = useState('')

    // const {user} = useContext(AuthenticationContext);

    function salvarCadastro(){
        console.log('Apertei')
    }

    return(
        <>
            <Container>

            <View style={styles.container2}>

                <StatusBar/>

                    <View>
                        <CircleProfilePicture uriPicture={"user.image_url"} />
                    </View>
                    
                    <View style={{alignItems: 'center'}}>
                        {/* <ProfileName nmUser={"user.name"} /> */}
                        <Text style={styles.userNametitle}>@{"user.name"}</Text>
                        <Text style={styles.userEmailtitle}>Yuri@gmail.com</Text>
                    </View>

                <View style={styles.boxInput}>
                    
                    <Text style={styles.textLabel}>Nome</Text>
                    <TextInput 
                        style={styles.inputText}
                        onChangeText={setNome}
                        value={nome}
                    ></TextInput>

                    <Text style={styles.textLabel}>Nome de usuário</Text>
                    <TextInput 
                        style={styles.inputText}
                        onChangeText={setNickname}
                        value={nickname}
                        placeholder={"@meunickname"}
                    ></TextInput>


                    <Text style={styles.textLabel}>E-mail</Text>
                    <TextInput 
                        style={styles.inputText}
                        onChangeText={setEmail}
                        value={email}
                        ></TextInput>

                    <Text style={styles.textLabel}>Senha</Text>
                    <TextInput 
                        style={styles.inputText}
                        onChangeText={setSenha}
                        value={senha}
                        secureTextEntry={true}
                        ></TextInput>

                    <Text style={styles.textLabel}>Confirme sua Senha</Text>
                    <TextInput 
                        style={styles.inputText}
                        onChangeText={setConfSenha}
                        value={confSenha}
                        secureTextEntry={true}
                        ></TextInput>

                    <Pressable 
                        style={styles.buttonSave}
                        onPress={salvarCadastro}
                        >
                        <Text style={styles.textButton}>Salvar</Text>
                    </Pressable>
                </View>
                </View>
            
                </Container>
        </>
    )
}
