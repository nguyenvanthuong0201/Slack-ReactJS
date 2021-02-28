import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBxyn--kFkVLkPcGeRDfvH6_d-OPBO1pyQ",
    authDomain: "slack-clone-9e8fa.firebaseapp.com",
    projectId: "slack-clone-9e8fa",
    storageBucket: "slack-clone-9e8fa.appspot.com",
    messagingSenderId: "109475697076",
    appId: "1:109475697076:web:b3a69bdd73fe6ac16522e1",
    measurementId: "G-LTKBFMTZE9"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export{auth,provider,db};