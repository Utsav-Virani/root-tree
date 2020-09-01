import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyArOxlK0siYR77oSborEc52owClKLOIKLw",
  authDomain: "root-tree.firebaseapp.com",
  databaseURL: "https://root-tree.firebaseio.com",
  projectId: "root-tree",
  storageBucket: "root-tree.appspot.com",
  messagingSenderId: "515177086360",
  appId: "1:515177086360:web:6659639c9141563244bfed",
  measurementId: "G-VP6HT9PXVY"
};

const config = firebase.initializeApp(firebaseConfig);

const storage = config.storage();

const dataBase = config.database();
export { storage, dataBase, config as default };