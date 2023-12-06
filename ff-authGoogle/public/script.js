//The code till initialize are from the firebase authentication of registeration
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
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
  appId: "1:732661377371:web:2e30bbc0e55398e5a3d27e",
  measurementId: "G-X4ZW50TTTS",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

//add event listner to the buttons
document.getElementById("login").addEventListener("click", GoogleLogin);
document.getElementById("logout").addEventListener("click", LogoutUser);

document.getElementById("dashboard").style.display="none";
//Login function
function GoogleLogin() {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result.user);
      document.getElementById("LoginScreen").style.display="none";
      document.getElementById("dashboard").style.display="block";
      showUserDetails(result.user);
    })
    .catch((error) => {
      console.error(error);
    });
}
//show details of the user
function showUserDetails(user) {
  document.getElementById("userDetails").innerHTML = ` 
  <img src="${user.photoURL}" style="width:10%" >
  <p>Name :${user.displayName}</p> 
  <p>Email: ${user.email}</p>
  `
}

//Once after login a user no need to login again and again it will take directly dashboard page
function checkAuthState() {
  auth.onAuthStateChanged(user=>{
    if(user){
      document.getElementById("LoginScreen").style.display="none";
      document.getElementById("dashboard").style.display="block";
      showUserDetails(user)
    }else{

    }
  })
}


//Logout function
function LogoutUser() {
  console.log("Logout Button is called");
  auth.signOut().then(()=> {
    document.getElementById("LoginScreen").style.display="block";
      document.getElementById("dashboard").style.display="none";
  }).catch(error=>{
console.log(error);
  })
}

checkAuthState();