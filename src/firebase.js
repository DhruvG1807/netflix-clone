import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC9aRzShARf-09dEFRZkZCcwUuYBFCaE04",
    authDomain: "netflix-clone-a49e4.firebaseapp.com",
    projectId: "netflix-clone-a49e4",
    storageBucket: "netflix-clone-a49e4.appspot.com",
    messagingSenderId: "347734210163",
    appId: "1:347734210163:web:64889170040b296bbc5c06",
    measurementId: "G-MW9BSP62TM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth }
  export default db;