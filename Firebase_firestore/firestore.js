// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  doc,
  deleteDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

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

// Function to add data
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

const resultDiv = document.getElementById("result");

// Real-time data update using onSnapshot
const unsub = onSnapshot(collection(db, "users"), (snapshot) => {
  resultDiv.innerHTML = ''; 
  snapshot.forEach((doc) => {
    const changeType = doc.metadata.hasPendingWrites ? "Local" : "Server";
    console.log(changeType + " change detected:", doc.data());
  // Display the user data in HTML
  const userHTML = `<p>${doc.data().username}</p>
  <button class="delete-btn" data-id="${doc.id}">DELETE</button>`;
resultDiv.innerHTML += userHTML;
});
});

// Event listener for delete button
resultDiv.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON" && event.target.classList.contains("delete-btn")) {
    const id = event.target.dataset.id;
    if (confirm('Are you sure to delete')) {
      remove(id);
    }
  }
});

//function for delete a document
function remove(id) {
    const docRef = doc(collection(db, "users"), id);
    console.log(docRef);
    deleteDoc(docRef)
  .then(() => {
    console.log("Document is deleted Permently", id);
    alert("data removed");
  })
  .catch((error) => {
    console.log("Error while deleting the document", error);
  });
}


//Query snapshot
// const querySnapshot = await getDocs(collection(db, "users"));
// document.getElementById("result").innerHTML = ` `;
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
//   // Printing the user id in HTML page
//   document.getElementById("result").innerHTML += `
// <p>${doc.data().username} </p>
// `;
// });
