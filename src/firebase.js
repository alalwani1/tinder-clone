import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA0ijzpxm8yC-rZ6pdHB5pgOiNVsdcd8hnh6Lk",
    authDomain: "tinder-project-with-reactsdcd.firebaseapp.com",
    projectId: "tinder-project-with-reactsdcd",
    storageBucket: "tinder-project-with-reactsdcc.appspot.com",
    messagingSenderId: "4640098116sdc90",
    appId: "1:464009811690:web:6696ead18701a41sdc3b5a993",
    measurementId: "G-XC5QZVTS7J"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;