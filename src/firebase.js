import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyARNp1SUqKKOq6hoOHd_WXEDF4MB2fUpGo",
    authDomain: "anime-app-e64cf.firebaseapp.com",
    projectId: "anime-app-e64cf",
    storageBucket: "anime-app-e64cf.appspot.com",
    messagingSenderId: "925298588723",
    appId: "1:925298588723:web:b96da9ee51960ad5043746",
    measurementId: "G-HV51M59QL0"
  };

const app = firebase.initializeApp(firebaseConfig)

const db = firebase.firestore(app);

const auth = firebase.auth();

const provider = new firebase.auth.FacebookAuthProvider();

export {db, auth, provider}