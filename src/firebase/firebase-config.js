import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAOQcPMLhC6eEdagEnPvO4dINREknH8P9Y",
  authDomain: "react-app-unal.firebaseapp.com",
  projectId: "react-app-unal",
  storageBucket: "react-app-unal.appspot.com",
  messagingSenderId: "207710527567",
  appId: "1:207710527567:web:c35b44aa9143c1c66f4a3a"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}