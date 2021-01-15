import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBKid1MdLWrx4fEQeZnt9BPoSz3ee1UjC0",
    authDomain: "hug-db.firebaseapp.com",
    projectId: "hug-db",
    storageBucket: "hug-db.appspot.com",
    messagingSenderId: "663884514444",
    appId: "1:663884514444:web:bb0dd99c7cbdcae1e267a9",
    measurementId: "G-CHWR3BV1TC"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


