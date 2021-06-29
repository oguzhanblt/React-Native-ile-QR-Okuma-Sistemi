import *as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image,ImageBackground } from 'react-native';
import { firebaseAuth } from '../config';
import  firebase  from 'firebase';

 export default class Articles extends React.Component{
      constructor(props){
          super(props);
          this.state=
            {
            currentUser:null,
            errorMessage:null
            }
        }
        componentDidMount(){
            const{currentUser}=firebaseAuth;
            this.state={currentUser}
        }
       
        render(){
            const {currentUser}=this.state
            return(
                <ImageBackground source={require('../src/image/background.jpg')} style={styles.BackgroundImage}>
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.cikisButon} onPress={() => firebase.auth().signOut()} >
                            <Image source={require('../src/image/geriDonus.png')}
                            style={{ height: 35, width: 35, marginTop: 20,right:20 }} resizeMode='contain' />
                        </TouchableOpacity>
                    <Image source={require('../src/image/Logo.png')}
                            style={{ height: 120, width: 200, marginTop: 0 }} resizeMode='contain' />
                           
            
                        <View>
                        <TouchableOpacity 
                        style={styles.buttonContainer}
                        onPress={()=>this.props.navigation.navigate('qrOkut')}>
                            <Text style={styles.ButtonText}>QR Okut</Text>
                        </TouchableOpacity>
                        </View>
                        <View>
                        <TouchableOpacity 
                        style={styles.buttonContainer2}
                        onPress={()=>this.props.navigation.navigate('ServisBilgileri')}>
                            <Text style={styles.ButtonText}>Servis Bilgileri</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            )
        }
    
 };



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    cikisButon:{
        left:170
    },
    ButtonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        paddingTop: 8
    },
    buttonContainer: {
        backgroundColor: 'black',
        padding: 5,
        height: 50,
        width: 310,
        borderRadius: 8,
        marginTop: 350
    },
    buttonContainer2: {
        backgroundColor: 'black',
        padding: 5,
        height: 50,
        width: 310,
        borderRadius: 8,
        marginTop:10
    },
    buttonContainer1: {
        backgroundColor: 'black',
        padding: 5,
        height: 55,
        width: 300,
        borderRadius: 8,
        marginTop: 20
    },
    BackgroundImage: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});