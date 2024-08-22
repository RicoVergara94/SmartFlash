// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "smartflash-e0614.firebaseapp.com",
  projectId: "smartflash-e0614",
  storageBucket: "smartflash-e0614.appspot.com",
  messagingSenderId: "1012446786535",
  appId: "1:1012446786535:web:686999ef9767de5599c342",
  measurementId: "G-NCW43T5ZPS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
