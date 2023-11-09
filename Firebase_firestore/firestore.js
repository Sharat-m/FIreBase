// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js';
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEu-quxOhCBQVZz463GnuN1GFQGGEC5TI",
  authDomain: "ff-firestore-demo.firebaseapp.com",
  projectId: "ff-firestore-demo",
  storageBucket: "ff-firestore-demo.appspot.com",
  messagingSenderId: "488816264437",
  appId: "1:488816264437:web:01f65a62383d05b09a71bc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

document.getElementById("addDataBtn").addEventListener("click", addData);

function addData() {
  const name = document.getElementById("name").value;
  addDoc(collection(db, "users"), {
    username: name,
  })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
}
