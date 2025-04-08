// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "twitterclerk.firebaseapp.com",
  projectId: "twitterclerk",
  storageBucket: "twitterclerk.appspot.com",
  messagingSenderId: "327933373958",
  appId: "1:327933373958:web:31f239f9d8fd5efa541d87",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
