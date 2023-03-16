// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQM3ohnetsKFoZASlED2WCCO1SUA6Kbao",
  authDomain: "myproject-946ac.firebaseapp.com",
  projectId: "myproject-946ac",
  storageBucket: "myproject-946ac.appspot.com",
  messagingSenderId: "1017182368407",
  appId: "1:1017182368407:web:e54cad5aa5d52fcbd62fd2",
  measurementId: "G-L20P38HS2Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
