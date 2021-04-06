import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC1fzIj5jdehRrSE8BoEQ7qD1Ihw6JsLeE",
    authDomain: "reactshoper.firebaseapp.com",
    projectId: "reactshoper",
    storageBucket: "reactshoper.appspot.com",
    messagingSenderId: "566196910661",
    appId: "1:566196910661:web:6b1178fd3471f5d305812c",
    measurementId: "G-RZ8DKCLPZ4"
  }

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShop = await userRef.get();

  if(!snapShop.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }

  }

  return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;