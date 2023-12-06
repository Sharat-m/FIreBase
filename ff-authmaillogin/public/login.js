import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword, 
  signOut,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_cJGA-YDd8TJTmDNKOqHL0qH3sOKJC7o",
  authDomain: "fir-authmail-3f601.firebaseapp.com",
  projectId: "fir-authmail-3f601",
  storageBucket: "fir-authmail-3f601.appspot.com",
  messagingSenderId: "949401624630",
  appId: "1:949401624630:web:d35846cc54689185b6f897",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("loginBtn").addEventListener("click", LoginUser);
document.getElementById("logoutBtn").addEventListener("click", LogoutUser);


document.getElementById("loginScreen").style.display = "block";
document.getElementById("dashboard").style.display = "none";

function LoginUser() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Logged in user:", user); 
    })
    .catch((error) => {
      alert("The password is invalid");
      console.log(error.code, error.message);
    });
}


function showUserDetails(user) {
  document.getElementById("userDetails").innerHTML = `
    <p>Logged in Success with ${user.email}</p>
    `;
}

auth.onAuthStateChanged((user) => {
  if (user) {
    // console.log(user);
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
    showUserDetails(user);
  } else {
    document.getElementById("loginScreen").style.display = "block";
    document.getElementById("dashboard").style.display = "none";
  }
});


function LogoutUser() {
  signOut(auth).then(() => {
    document.getElementById("loginScreen").style.display = "block";
    document.getElementById("dashboard").style.display = "none";
    console.log("Signout succesfull");
  })
  .catch((error) => {
    console.log(error);
  });
}