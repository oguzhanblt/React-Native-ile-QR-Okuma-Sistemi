import *as React from 'react';
import { Table, Row, Rows } from 'react-native-table-component';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { firebaseAuth } from '../config';
import firebase from 'firebase';
export default class ServisBilgileri extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['PLAKA NO', 'ŞOFÖR BİLGİLERİ ', 'GÜZERGAH'],
            tableData: [
                ['34 ABC 34', 'AHMET DENİZ', 'SANCAKTEPE\nÜMRANİYE'],
                ['34 DEF 34', 'MEHMET AKİF', 'ÜSKÜDAR\nÜMRANİYE'],
                ['34 ASD 34', 'ÖMER YURT', 'BAĞCILAR\nÜMRANİYE'],
                ['34 YPU 34', 'ALİ GÖK', 'FATİH\nÜMRANİYE'],
                ['34 ZVB 34', 'KEMAL TUNÇ', 'EYÜP\nÜMRANİYE'],
                ['34 KLJ 34', 'BERKE BULUT', 'BEYKOZ\nÜMRANİYE'],
                ['34 PSN 34', 'MAHMUT EREN', 'BAKIRKÖY\nÜMRANİYE'],
                ['34 EHZ 34', 'FIRAT KALEM', 'FLORYA\nÜMRANİYE'],
            ],
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
                    <TouchableOpacity style={styles.cikisButon} onPress={()=>this.props.navigation.navigate('Articles')} >
                        <Image source={require('../src/image/back.png')}
                            style={{ height: 35, width: 35, marginTop: 20, left: 10 }} resizeMode='contain' />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.cikisButon} onPress={() => firebase.auth().signOut()} >
                        <Image source={require('../src/image/geriDonus.png')}
                            style={{ height: 35, width: 35, marginTop: -35, left: 310 }} resizeMode='contain' />
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
    container: { flex: 1, padding: 16, paddingTop: 30},
    head: { height: 40, backgroundColor: '#fafafa' },
    text: { margin: 6, textAlign: 'center' , fontWeight: 'bold',},
    textBaslik: { margin: 6, fontWeight: 'bold', fontSize: 13, textAlign: 'center' },
    BackgroundImage: {
        width: '100%',
        height: '100%',
    }
});