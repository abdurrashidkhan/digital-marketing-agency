// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTi-pzoucAq0FMhcaQvOrJwmZjGfHssxE",
  authDomain: "e-merge-marketing.firebaseapp.com",
  projectId: "e-merge-marketing",
  storageBucket: "e-merge-marketing.appspot.com",
  messagingSenderId: "247855149176",
  appId: "1:247855149176:web:91c6d043b24012c7b87d8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth  = getAuth(app);