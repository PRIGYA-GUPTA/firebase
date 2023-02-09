
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDGv_sZ2-kx84UiCbLSB4cQgrD8xR_k4Ss",
  authDomain: "myproject-7b11b.firebaseapp.com",
  projectId: "myproject-7b11b",
  storageBucket: "myproject-7b11b.appspot.com",
  messagingSenderId: "1080281539412",
  appId: "1:1080281539412:web:39549d50f344b3efe6dec1",
  measurementId: "G-TLMS00GKZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app,auth}
