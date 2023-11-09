// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC5GKNZabpoG2-uKqhzvHb0S5DoC23kas",
  authDomain: "auth-demo-f7828.firebaseapp.com",
  projectId: "auth-demo-f7828",
  storageBucket: "auth-demo-f7828.appspot.com",
  messagingSenderId: "732661377371",
  appId: "1:732661377371:web:5b3d76adec1b7062a3d27e",
  measurementId: "G-VZX4EM0ENB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);