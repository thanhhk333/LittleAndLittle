import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCLc3WVXV23pQRKweWiAfonesPRidiwHE4",
    authDomain: "littlechannel-7c285.firebaseapp.com",
    projectId: "littlechannel-7c285",
    storageBucket: "littlechannel-7c285.appspot.com",
    messagingSenderId: "869462820841",
    appId: "1:869462820841:web:4e1ebf28389d609f646d78",
    measurementId: "G-DYV2RHKZPF",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth();
firebase.firestore();
export const storage = firebase.storage();
export const firestore = firebase.firestore();
