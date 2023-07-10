// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVKuoA9G5c1P8GfixqdCAizqfaLd2MMwM",
    authDomain: "quora-clone-e0b32.firebaseapp.com",
    projectId: "quora-clone-e0b32",
    storageBucket: "quora-clone-e0b32.appspot.com",
    messagingSenderId: "961232245779",
    appId: "1:961232245779:web:da9b933bca4c9bf189dbe6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };