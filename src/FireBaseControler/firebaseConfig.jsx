import firebase from 'firebase';

var firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};

const config = firebase.initializeApp(firebaseConfig);

const storage = config.storage();

const db = config.database();

const dataBase = config.firestore();
export { storage, dataBase, db, config as default };