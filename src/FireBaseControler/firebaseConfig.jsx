import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyB6SG4lysAOiLoQJB3GeLRiOqG5yHVZgH4",
    authDomain: "root-tree-4665a.firebaseapp.com",
    databaseURL: "https://root-tree-4665a.firebaseio.com",
    projectId: "root-tree-4665a",
    storageBucket: "root-tree-4665a.appspot.com",
    messagingSenderId: "1082796775221",
    appId: "1:1082796775221:web:c2f8610a0595a97f2fde7c",
    measurementId: "G-7QCD4J784Z"
  };

const config = firebase.initializeApp(firebaseConfig);

export default config;