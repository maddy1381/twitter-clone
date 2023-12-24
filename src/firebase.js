// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAuq3dveM-UAm4Gtbdyb5ENrRq193jmv3k",
  authDomain: "twitter-clone-7e461.firebaseapp.com",
  projectId: "twitter-clone-7e461",
  storageBucket: "twitter-clone-7e461.appspot.com",
  messagingSenderId: "868192516999",
  appId: "1:868192516999:web:b7f7aca109f1b5b1037122",
  measurementId: "G-JWT7CV1WWT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
