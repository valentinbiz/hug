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

export const createUserProfileDocument = async(userAuth, additionlaData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    
    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionlaData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


