// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "arlanblog.firebaseapp.com",
  projectId: "arlanblog",
  storageBucket: "arlanblog.appspot.com",
  messagingSenderId: "761335353928",
  appId: "1:761335353928:web:5a41160f2897c83744be7d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);