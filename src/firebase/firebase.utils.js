import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
apiKey: "AIzaSyBzNxBPz7VehoS4qrC50AuIewlMpWhwRJ0",
authDomain: "steve-db-7656b.firebaseapp.com",
databaseURL: "https://steve-db-7656b.firebaseio.com",
projectId: "steve-db-7656b",
storageBucket: "steve-db-7656b.appspot.com",
messagingSenderId: "457158832938",
appId: "1:457158832938:web:5114ad070be8432bef2453"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;