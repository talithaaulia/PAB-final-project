import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyBKB1wF0E61hOdlqqMUdGzPEGe8w-U7-dA",
    authDomain: "recipe-app-87824.firebaseapp.com",
    databaseURL: "https://recipe-app-87824-default-rtdb.firebaseio.com",
    projectId: "recipe-app-87824",
    storageBucket: "recipe-app-87824.appspot.com",
    messagingSenderId: "21781284724",
    appId: "1:21781284724:web:b30178d47977044a5cce21"
});

const FIREBASE = firebase;

export default FIREBASE;

