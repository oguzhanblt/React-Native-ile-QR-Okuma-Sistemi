import *as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, Linking, Platform } from 'react-native';
import { firebaseAuth } from '../config';
import firebase from 'firebase';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

export default class besiktas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
      currentUser: null,
      errorMessage: null

    }
  }
  componentDidMount() {
    const { currentUser } = firebaseAuth;
    this.state = { currentUser }
  }
  
  render() {
    const state = this.state;
    const { currentUser } = this.state;
    return (

      <ImageBackground source={require('../src/image/background.jpg')} style={styles.BackgroundImage}>

        <View>
          <TouchableOpacity style={styles.cikisButon} onPress={() => this.props.navigation.navigate('ServisBilgileri')} >
            <Image source={require('../src/image/back.png')}
              style={{ height: 35, width: 35 , left:10,top:10}} resizeMode='contain' />
          </TouchableOpacity>
        </View>
        <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: 41.043999,
         longitude: 29.002001,
         latitudeDelta: 0.09,
         longitudeDelta: 0.025,
       }}
     >
       <MapViewDirections
       origin={{latitude: 41.043999,longitude: 29.002001}}
       destination={{latitude: 41.0329,longitude: 29.1014}}
       apikey={"AIzaSyAa0adrFPalelH7oKQdhPt1XR6jTiVa9GI"} 
       strokeWidth={3}
       strokeColor="#111111"
       ></MapViewDirections>
       <Marker coordinate={{latitude:41.0329, longitude:29.1014}}
       title={'Ümraniye'}/>
       <Marker coordinate={{latitude: 41.043999,longitude: 29.002001}}
       title={'Beşiktaş'}/>
     </MapView>
     </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30 },
  text: { margin: 5, textAlign: 'center', fontWeight: 'bold', },
  textBaslik: { margin: 6, fontWeight: 'bold', fontSize: 13, textAlign: 'center' },
  BackgroundImage: {
    width: '100%',
    height: '100%',
  },
  touchableButton: {
    width: '100%',
    backgroundColor: 'transparent',
  },
  map: {
    height: 680,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop:20
  },
  
});