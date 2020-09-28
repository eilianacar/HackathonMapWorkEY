import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
/* import 'firebase/storage' */

const firebaseConfig = {
    apiKey: "AIzaSyBNuJgMAXFZlQuQsQUSRkvpe62s_meokuw",
    authDomain: "mapworkey.firebaseapp.com",
    databaseURL: "https://mapworkey.firebaseio.com",
    projectId: "mapworkey",
    storageBucket: "mapworkey.appspot.com",
    messagingSenderId: "425283868596",
    appId: "1:425283868596:web:ab1c73ce4dc33e1fac84e1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  /* const storage = firebase.storage(); */
  const db = firebase.firestore();
  const auth = firebase.auth();
  
  export {db, auth};