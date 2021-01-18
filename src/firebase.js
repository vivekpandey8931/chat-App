import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyACY-_YbMKdIwY6nm-SVFwMWhueAqViqFk",
    authDomain: "web-chat-db012.firebaseapp.com",
    databaseURL: "https://web-chat-db012-default-rtdb.firebaseio.com",
    projectId: "web-chat-db012",
    storageBucket: "web-chat-db012.appspot.com",
    messagingSenderId: "597010636945",
    appId: "1:597010636945:web:594f2d53bf827189a11f30",
    measurementId: "G-Z6RF41TNW3"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
