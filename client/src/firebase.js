// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-4696f.firebaseapp.com",
  projectId: "blog-4696f",
  storageBucket: "blog-4696f.firebasestorage.app",
  messagingSenderId: "444747827462",
  appId: "1:444747827462:web:8a95756b159a285768f687",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
