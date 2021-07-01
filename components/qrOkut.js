import React, { useState, useEffect } from 'react';
 import {
   StyleSheet,
   View,
   Text,
   TouchableOpacity,
   ImageBackground,
   BackHandler,
   Image,Alert,
 } from 'react-native';
 import base64 from 'react-native-base64';
 import QRCodeScanner from 'react-native-qrcode-scanner';
 import firebase from "firebase/app";
 import "firebase/database";



 const qrOkut = ({navigation}) => {
  const [scan, setScan] = useState(false)
  const [result, setResult] = useState()
  const [currentDate, setCurrentDate]= useState(' ')
  onSuccess = (e) => {
    setResult(e.data)
    setScan(false)
  }
  
  
    startScan = () => {
      setScan(true)
      setResult()
    }
    useEffect(() => {
      this.startScan(true)
    if(useState.setScan==true){
      writeUserData
    }
      var year=new Date().getFullYear();
      var date=new Date().getDate();
      var month=new Date().getMonth()+1;
      setCurrentDate(
        year + '/' + month + '/' + date
      );
    }, []);
    function writeUserData(){
      firebase.database().ref('/'+currentDate).push({
        mail:(firebase.auth().currentUser.email),
        servis:(base64.decode(result))
      })
      .then(()=>navigation.navigate('Articles'))
     

    }
    
    
   return (
     <>
     <ImageBackground source={require('../src/image/background.jpg')} style={styles.BackgroundImage}>
     <View>
                    <TouchableOpacity style={styles.cikisButon} title="Back"
      onPress={() =>{navigation.navigate('Articles')}}>
                        <Image source={require('../src/image/back.png')}
                            style={{ height: 35, width: 35 }} resizeMode='contain' />
                    </TouchableOpacity>
                </View>
            { result &&
            
              <View style={styles.sectionContainerOnay}>               
                 <TouchableOpacity onPress={writeUserData} title={base64.decode(result)}> 
                <Text style={styles.bilgi}>Göndermek İçin Tıklayınız.</Text>
                 <Image source={require('../src/image/click.png')}
                  style={{height:200,width:200,marginTop:15,marginBottom:25 }}resizeMode='contain'/>}
                </TouchableOpacity> 
                </View>
              }
             { scan &&
               <View style={styles.sectionContainer}>
               <QRCodeScanner
                 reactivate={true}
                 showMarker={true}
                 ref={(node) => { this.scanner = node }}
                 onRead={this.onSuccess}
                 topContent={
                   <Image source={require('../src/image/vbLogo.png')}
                   style={{height:40,width:40,marginBottom:80}}resizeMode='contain'/>
                  }
                  bottomContent={
                    <TouchableOpacity style={styles.buttonTouchable} onPress={() =>BackHandler('Articles')}>
                     <Text style={styles.buttonText}>Telefonunuzu QR kodu okuyabilecek şekilde tutunuz.</Text>
                   </TouchableOpacity>
                 }
                 />
             </View>
             }
             

             </ImageBackground>
            
     </>
   );
 };

 const styles = StyleSheet.create({
  buttonText: {
    fontSize: 15,
    color: 'black',
    marginTop:30,
  },
  buttonTouchable: {
    padding: 16,
  },
   centerText: {
     flex: 1,
     fontSize: 18,
     padding: 32,
     color: '#797979',
   },
   BackgroundImage: {
    width: '100%',
    height: '100%',
    alignItems: 'center'
},
sectionContainerOnay:{
  alignItems:'center',
  justifyContent:'center',
  position:'relative'
},
bilgi:{
  marginTop:250,
  fontSize:17,
  fontWeight: 'bold',
  left:10
}
 });
 export default qrOkut;