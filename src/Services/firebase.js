import React from "react";
import firebase from "firebase"

 /// Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyDftB6fDDbKsvfqoKuWkB8ruEW5mpwL_bI",
  authDomain: "web-chat-app-da379.firebaseapp.com",
  databaseURL: "https://web-chat-app-da379-default-rtdb.firebaseio.com",
  projectId: "web-chat-app-da379",
  storageBucket: "web-chat-app-da379.appspot.com",
  messagingSenderId: "778961694196",
  appId: "1:778961694196:web:5a1ba38a6eb7808da65da1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;