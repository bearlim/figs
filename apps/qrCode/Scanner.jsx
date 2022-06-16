import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';


import { BarCodeScanner } from 'expo-barcode-scanner';

export default function ScannerQr() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Ainda não foi escaneado')

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }


  // Permissão da camera
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // O que acontece quando escaneia...
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data)
    console.log('Type: ' + type + '\nData: ' + data)
  };

  // Checar permissão
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Permissão para acessar a camera</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>Sem acesso a camera</Text>
        <Button title={'Permitir camera'} onPress={() => askForCameraPermission()} />
      </View>)
  }

  // View principal
  return (
    <View style={styles.container}>
      
        <Text style={{color: 'white', marginTop: 15}}>Escanei o QR code</Text>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400, marginTop: 10 }} />
      </View>
      <Image source={{ uri: text }} style= { styles.imageBox }/>
      

      {scanned && <TouchableOpacity style= { styles.buttonStyle } title={'Resgatar'} onPress={() => setScanned(false)} color='#88304E' ><Text style= { styles.resgatarText }>Resgatar</Text></TouchableOpacity>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'tomato'
  },
  buttonStyle: {
    width: 300, 
    height: 65, 
    borderRadius: 17, 
    backgroundColor: "#88304E"
  },
  resgatarText: {
    textAlign: 'center', 
    fontSize: 20, 
    color: 'white', 
    marginTop: 15
  },
  imageBox: {
    width: 250, 
    height: 250, 
    borderRadius: 50, 
    marginTop: 39, 
    marginBottom:39
  }
});
