// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, updateProfile } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB00a3f3HL3NFmKa_X8V-vCb4qUndLMrXc",
  authDomain: "bespoke-951c2.firebaseapp.com",
  databaseURL: "https://bespoke-951c2-default-rtdb.firebaseio.com",
  projectId: "bespoke-951c2",
  storageBucket: "bespoke-951c2.appspot.com",
  messagingSenderId: "1045885500713",
  appId: "1:1045885500713:web:82fad7a5395e7cf1e18b38"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const fireAuth = getAuth()
export const db = getFirestore(app)