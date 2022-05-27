// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDui5k9c8HArVm404a5WcKRlreTaETjmp8",
  authDomain: "portfolio-18049.firebaseapp.com",
  projectId: "portfolio-18049",
  storageBucket: "portfolio-18049.appspot.com",
  messagingSenderId: "38059698429",
  appId: "1:38059698429:web:10b7082eccfb94a97cf694"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let auth = getAuth(app);

export default auth;