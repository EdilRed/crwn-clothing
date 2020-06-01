import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBpieAJ0FCc2RlqZukAMlCga55I1cZ01hw",
  authDomain: "crwn-db-dc351.firebaseapp.com",
  databaseURL: "https://crwn-db-dc351.firebaseio.com",
  projectId: "crwn-db-dc351",
  storageBucket: "crwn-db-dc351.appspot.com",
  messagingSenderId: "717330742042",
  appId: "1:717330742042:web:2fc197ea5a92b19ce04aa3",
  measurementId: "G-6W1W8Y4464"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;