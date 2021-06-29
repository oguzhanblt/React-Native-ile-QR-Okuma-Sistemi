import * as firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyApRCyR1tTb2qFmVlWZPWN3P0QxAf3T6jY",
    authDomain: "baslangic-c4648.firebaseapp.com",
    projectId: "baslangic-c4648",
    storageBucket: "baslangic-c4648.appspot.com",
    messagingSenderId: "1021286306424",
    appId: "1:1021286306424:web:eebece5e1d2aa98490538d",
    databaseURL:"https://baslangic-c4648-default-rtdb.europe-west1.firebasedatabase.app/"
  };
  // Initialize Firebase
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  export const firebaseAuth=firebaseApp.auth();
