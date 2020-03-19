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

export const createUserProfileDocument = async (userAuth, additionalData) => {
   
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

   if(!snapshot.exists){
       const{displayName, email} = userAuth;
       const createdAt = new Date();

       try{
           await userRef.set({
               displayName,
               email,
               createdAt,
               ...additionalData
           })
       }catch(error){
           console.log('error craeting user', error.message);
       }
   }

   return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;