import *as React from 'react';
import { Table, Row, Rows } from 'react-native-table-component';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, Linking, Platform } from 'react-native';
import { firebaseAuth } from '../config';
import firebase from 'firebase';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
const coordinates = [
  {
    latitude: 48.8587741,
    longitude: 2.2069771,
  },
  {
    latitude: 48.8323785,
    longitude: 2.3361663,
  }];
export default class ServisBilgileri extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['PLAKA NO', 'ŞOFÖR BİLGİLERİ ', 'TELEFON NO', 'GÜZERGAH'],
      tableData: [
        ['34 ABC 34', 'AHMET DENİZ', <TouchableOpacity onPress={this.makeCall} activeOpacity={0.7} style={styles.touchableButton} >
          <Text style={styles.textNo}>123456789</Text>
        </TouchableOpacity>, <TouchableOpacity onPress={() => this.props.navigation.navigate('besiktas')} activeOpacity={0.7} style={styles.touchableButton} >
          <Text style={styles.textNo}>BEŞİKTAŞ ÜMRANİYE</Text>
        </TouchableOpacity>],
        ['34 DEF 34', 'MEHMET AKİF', <TouchableOpacity onPress={this.makeCall} activeOpacity={0.7} style={styles.touchableButton} >
          <Text style={styles.textNo}>123456789</Text>
        </TouchableOpacity>, <TouchableOpacity onPress={() => this.props.navigation.navigate('uskudar')} activeOpacity={0.7} style={styles.touchableButton} >
          <Text style={styles.textNo}>ÜSKÜDAR ÜMRANİYE</Text>
        </TouchableOpacity>],
        ['34 ASD 34', 'ÖMER YURT', <TouchableOpacity onPress={this.makeCall} activeOpacity={0.7} style={styles.touchableButton} >
          <Text style={styles.textNo}>123456789</Text>
        </TouchableOpacity>, <TouchableOpacity onPress={() => this.props.navigation.navigate('bagcilar')} activeOpacity={0.7} style={styles.touchableButton} >
          <Text style={styles.textNo}>BAĞCILAR ÜMRANİYE</Text>
        </TouchableOpacity>],
        ['34 YPU 34', 'ALİ GÖK', <TouchableOpacity onPress={this.makeCall} activeOpacity={0.7} style={styles.touchableButton} >
          <Text style={styles.textNo}>123456789</Text>
        </TouchableOpacity>,<TouchableOpacity onPress={() => this.props.navigation.navigate('fatih')} activeOpacity={0.7} style={styles.touchableButton} >
          <Text style={styles.textNo}>FATİH ÜMRANİYE</Text>
        </TouchableOpacity>],
        ['34 ZVB 34', 'KEMAL TUNÇ', <TouchableOpacity onPress={this.makeCall} activeOpacity={0.7} style={styles.touchableButton} >
          <Text style={styles.textNo}>123456789</Text>
        </TouchableOpacity>, <TouchableOpacity onPress={() => this.props.navigation.navigate('eyup')} activeOpacity={0.7} style={styles.touchableButton} >
          <Text style={styles.textNo}>EYÜP ÜMRANİYE</Text>
        </TouchableOpacity>],
        ['34 KLJ 34', 'BERKE BULUT', <TouchableOpacity onPress={this.makeCall} activeOpacity={0.7} style={styles.touchableButton} >
          <Text style={styles.textNo}>123456789</Text>
        </TouchableOpacity>,<TouchableOpacity onPress={() => this.props.navigation.navigate('beykoz')} activeOpacity={0.7} style={styles.touchableButton} >
          <Text style={styles.textNo}>BEYKOZ ÜMRANİYE</Text>
        </TouchableOpacity>],
        ['34 PSN 34', 'MAHMUT EREN', <TouchableOpacity onPress={this.makeCall} activeOpacity={0.7} style={styles.touchableButton} >
          <Text style={styles.textNo}>123456789</Text>
        </TouchableOpacity>, <TouchableOpacity onPress={() => this.props.navigation.navigate('bakirkoy')} activeOpacity={0.7} style={styles.touchableButton} >
          <Text style={styles.textNo}>BAKIRKÖY ÜMRANİYE</Text>
        </TouchableOpacity>],
        ['34 EHZ 34', 'FIRAT KALEM', <TouchableOpacity onPress={this.makeCall} activeOpacity={0.7} style={styles.touchableButton} >
          <Text style={styles.textNo}>123456789</Text>
        </TouchableOpacity>,<TouchableOpacity onPress={() => this.props.navigation.navigate('florya')} activeOpacity={0.7} style={styles.touchableButton} >
          <Text style={styles.textNo}>FLORYA ÜMRANİYE</Text>
        </TouchableOpacity>],
      ],
      currentUser: null,
      errorMessage: null

    }
  }
  componentDidMount() {
    const { currentUser } = firebaseAuth;
    this.state = { currentUser }
  }
  makeCall = () => {

    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${123456789}';
    } else {
      phoneNumber = 'telprompt:${123456789}';
    }

    Linking.openURL(phoneNumber);
  };

  render() {
    const state = this.state;
    const { currentUser } = this.state;
    return (

      <ImageBackground source={require('../src/image/background.jpg')} style={styles.BackgroundImage}>

        <View>
          <TouchableOpacity style={styles.cikisButon} onPress={() => this.props.navigation.navigate('Articles')} >
            <Image source={require('../src/image/back.png')}
              style={{ height: 35, width: 35, left:10,top:10 }} resizeMode='contain' />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.cikisButon} onPress={() => firebase.auth().signOut()} >
            <Image source={require('../src/image/geriDonus.png')}
              style={{ height: 35, width: 35,marginTop: -30, left: 350 }} resizeMode='contain' />
          </TouchableOpacity>
        </View>
        <Image source={require('../src/image/Logo.png')}
          style={{ height: 120, width: 200, paddingTop: 0, left: 90 }} resizeMode='contain' />

        <View style={styles.container}>
          <Table borderStyle={{ borderWidth: 2, borderColor: '#fff' }}>
            <Row data={state.tableHead} style={styles.head} textStyle={styles.textBaslik} />
            <Rows data={state.tableData} textStyle={styles.text} />
          </Table>
        </View>
        
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30 },
  head: { height: 45, backgroundColor: '#fafafa' },
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
 
  textNo: { margin: 6, textAlign: 'center', fontWeight: 'bold', textDecorationLine: 'underline', color: '#525252' },
});