import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red',
        width: '100%',
        height: '100%',
    },
    boxInput:{
        width: '90%',
        marginHorizontal: 20,
        top: 200
    },
    textLabel:{
        margin: 10,
        fontWeight: 'bold',
        fontSize:16,
    },
    inputText:{
        
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 6,
        padding: 10
    },
    buttonSave:{
        backgroundColor: '#B92D10',
        padding: 15,
        marginTop: 50,
        borderRadius: 17,
        width:355,
        height: 65
    },
    textButton: {
        fontSize: 16,
        paddingTop: 5 ,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    }
})
