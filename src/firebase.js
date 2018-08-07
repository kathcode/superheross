import * as firebase from "firebase";

// Firebase configuration
const config = {
  apiKey: "AIzaSyA-L52usI2QahdbNePODTuBQcilkY50n9s",
  authDomain: "superheros-e39c4.firebaseapp.com",
  databaseURL: "https://superheros-e39c4.firebaseio.com",
  projectId: "superheros-e39c4",
  storageBucket: "superheros-e39c4.appspot.com",
  messagingSenderId: "853799128396"
};
firebase.initializeApp(config);

const databaseRef = firebase.database().ref();
export const superHerosListRef = databaseRef.child("superHerosList");