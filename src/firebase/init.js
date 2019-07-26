import firebase from "firebase";
import firestore from "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyAsyOTQfqLCEUG62Nnu49Nd8GaA-8J3Ssc",
  authDomain: "chit-chat-ed685.firebaseapp.com",
  databaseURL: "https://chit-chat-ed685.firebaseio.com",
  projectId: "chit-chat-ed685",
  storageBucket: "",
  messagingSenderId: "151333631692",
  appId: "1:151333631692:web:7c46e220b5dc814f"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();
