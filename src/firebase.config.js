// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpbJ_SFTQ_f5lymrCoKWM_DiPn7IYBrHk",
  authDomain: "devfolio-react-ddc18.firebaseapp.com",
  projectId: "devfolio-react-ddc18",
  storageBucket: "devfolio-react-ddc18.appspot.com",
  messagingSenderId: "512581321727",
  appId: "1:512581321727:web:d39631ee5b3ba06fc7ddca",
  measurementId: "G-LPJDP5W0HL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;
