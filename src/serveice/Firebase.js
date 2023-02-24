import firebase from 'firebase/app'
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBlCEFEIluiiQeXSV3mXvtqgBV0YFK1B70",
    authDomain: "fritzke-b50c8.firebaseapp.com",
    projectId: "fritzke-b50c8",
    storageBucket: "fritzke-b50c8.appspot.com",
    messagingSenderId: "757735254681",
    appId: "1:757735254681:web:2fc65a4b52a89dc7426608",
    measurementId: "G-GC235M2J6J"
  };

  const app = firebase.initializeApp(firebaseConfig)
  const auth = firebase.auth();

  export { firebase, app, auth }