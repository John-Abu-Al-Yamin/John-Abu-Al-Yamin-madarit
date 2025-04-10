 import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCRN0exzSE5fT7SrWl2F7c4IEeBl9uUPro",
    authDomain: "cityscanner-45cf6.firebaseapp.com",
    projectId: "cityscanner-45cf6",
    storageBucket: "cityscanner-45cf6.firebasestorage.app",
    messagingSenderId: "468077421523",
    appId: "1:468077421523:web:74deea19e8a4ec8ab94526",
    measurementId: "G-NKVZL38M2X"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };
