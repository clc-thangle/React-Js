import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBKF6-D3kwdIwpKKmw9zMkkheitgvqCifU",
    authDomain: "notereactfedu-f98a8.firebaseapp.com",
    databaseURL: "https://notereactfedu-f98a8.firebaseio.com",
    projectId: "notereactfedu-f98a8",
    storageBucket: "",
    messagingSenderId: "197516839263",
    appId: "1:197516839263:web:ec3d2b5aba24d975"
  };
  // Initialize Firebase
  
  export const noteData = firebase.initializeApp(firebaseConfig);