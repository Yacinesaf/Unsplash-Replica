import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyD9tT3DVOKyfkoqX_AuvPc7nYtL6ynbeh0",
  authDomain: "unsplashreplica.firebaseapp.com",
  databaseURL: "https://unsplashreplica.firebaseio.com",
  projectId: "unsplashreplica",
  storageBucket: "unsplashreplica.appspot.com",
  messagingSenderId: "819975947680",
  appId: "1:819975947680:web:1a35b8f28f1199eeef50c5"
};

export default firebase.initializeApp(firebaseConfig);