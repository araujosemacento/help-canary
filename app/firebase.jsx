// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbGvp4dohNeYCnlicKAnIzIRFbFCBxOCI",
  authDomain: "help-canary.firebaseapp.com",
  projectId: "help-canary",
  storageBucket: "help-canary.appspot.com",
  messagingSenderId: "816725367183",
  appId: "1:816725367183:web:4e810a38dc98e52f1653fa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//const analytics = getAnalytics(app);
