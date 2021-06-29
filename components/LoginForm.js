import React, { Component } from 'react';
import { View, Text,TextInput,Button,Image,Dimensions,TouchableOpacity, StyleSheet,ImageBackground } from 'react-native';
import { firebaseAuth } from '../config';


export default class LoginForm extends React.Component{
    state ={
        email:'',
        password:'',
        errorMessage:null
    }
    handleLogin=()=>{
        firebaseAuth.signInWithEmailAndPassword(this.state.email,this.state.password)
        .then(()=>this.props.navigation.navigate('Articles'))
        .catch(error=>this.setState({errorMessage:error.message}))
        
    }
    render(){
        return(
            <ImageBackground source={require('../src/image/background.jpg')} style={styles.BackgroundImage}>
                <View style={styles.container}>
                    <Image source={require('../src/image/Logo.png')}
                    style={{height:150,width:300,marginTop:50,marginBottom:20}}resizeMode='contain'/>                             
                
                {this.state.errorMessage &&
                <Text style={{color:'red'}}>
                {this.state.errorMessage}
                </Text>}
                <TextInput
                placeholder="  Personel Mail"
                autoCapitalize="none"
                style={styles.input}
                onChangeText={email=>this.setState({email})}
                value={this.state.email}/>
                <TextInput
                placeholder="  Şifre"
                autoCapitalize="none"
                style={styles.input}
                secureTextEntry={true}
                onChangeText={password=>this.setState({password})}
                value={this.setState.password}/>
                <TouchableOpacity onPress={this.handleLogin} 
                style={styles.buttonContainer}>
                    <View>
                        <Text style={styles.girisButtonText}>Giriş Yap</Text>
                    </View>
                </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

const heightConst=Dimensions.get('screen').height;
const styles=StyleSheet.create({
    container:{
            alignItems:'center',
    },
    BackgroundImage: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },input:{
        width: 300,
        height: 40,
        borderWidth: 2,
        color: 'black',
        borderRadius: 10,
        bottom: 20,
        marginBottom: 10,
    },
    buttonContainer:{
        backgroundColor:'black',
        padding:5,
        width:200,
        height:50,  
        borderRadius:8,
        marginTop:15
    },
    girisButtonText:{
        textAlign:'center',
        color:'white',
        fontSize:18,
        paddingTop:8
    },
});
