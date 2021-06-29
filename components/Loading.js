//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,ActivityIndicator ,Image} from 'react-native';
import { firebaseAuth } from '../config';



export default class Loading extends React.Component{

    componentDidMount(){
        firebaseAuth.onAuthStateChanged(user=>{
            this.props.navigation.navigate(user='LoginForm')
        })
    }
    render(){
        return(
            <View style={styles.container}>
                <Image source={require('../src/image/loadingfoto.png')}
                             resizeMode='contain' />
                <ActivityIndicator size="large"/>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
