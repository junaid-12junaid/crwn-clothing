import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config={
    apiKey: "AIzaSyDwiNRlKxkvgFQ-gsb3GXCiLNtSe6mVEc4",
    authDomain: "crwn-db-bb801.firebaseapp.com",
    projectId: "crwn-db-bb801",
    storageBucket: "crwn-db-bb801.appspot.com",
    messagingSenderId: "447450985691",
    appId: "1:447450985691:web:9ce6fe28943ea9480fc8fe",
    measurementId: "G-3ED13DS5QH"
  };

  firebase.initializeApp(config);


  export  const auth=firebase.auth();
  export  const firestore=firebase.firestore();

  //pop up Google Sign in
  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle=()=>auth.signInWithPopup(provider)

  export default firebase;