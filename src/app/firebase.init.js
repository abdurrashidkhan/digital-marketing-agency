import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLNPRzI8taZZVljNKM6qYoLfbRHTMWzrI",
  authDomain: "digital-marketing-agency-30fa0.firebaseapp.com",
  projectId: "digital-marketing-agency-30fa0",
  storageBucket: "digital-marketing-agency-30fa0.appspot.com",
  messagingSenderId: "151543460035",
  appId: "1:151543460035:web:8d165e4c3dc630d9443276"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth  = getAuth(app);