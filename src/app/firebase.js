// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, updateProfile } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrQ_lAyy1aKo37JaNQYEDP2bIRAJcIoV8",
  authDomain: "bespoke-ff9f2.firebaseapp.com",
  projectId: "bespoke-ff9f2",
  storageBucket: "bespoke-ff9f2.appspot.com",
  messagingSenderId: "1038272310732",
  appId: "1:1038272310732:web:05b4623b3c57a246564169"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const fireAuth = getAuth()
export const db = getFirestore(app)