// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2cfr03nGxz-3zU6bBBF0uo2kSWUGqByE",
  authDomain: "react-blog-71975.firebaseapp.com",
  projectId: "react-blog-71975",
  storageBucket: "react-blog-71975.appspot.com",
  messagingSenderId: "414680085870",
  appId: "1:414680085870:web:be00ef9fc1bbead4f8fd7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();