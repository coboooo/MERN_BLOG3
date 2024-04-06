// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realtor-6cc74.firebaseapp.com",
  projectId: "realtor-6cc74",
  storageBucket: "realtor-6cc74.appspot.com",
  messagingSenderId: "903779000533",
  appId: "1:903779000533:web:9a2008739225ac8b1cc25c",
  measurementId: "G-28C23S09EZ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
