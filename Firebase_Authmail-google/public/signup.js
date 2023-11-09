
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
  import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword
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
    appId: "1:949401624630:web:d35846cc54689185b6f897"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  //const provide = new GoogleAuthProvider(auth);

  document.getElementById("signUp").addEventListener("click", signUpUser)
     
  function signUpUser() {
          console.log("signup button is clicked");
          let email = document.getElementById("email").value;
          let password = document.getElementById("password").value;
          
          createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            //  console.log(user);
          })
          .catch((e) => {
            console.log(e)
          });
        }

    onAuthStateChanged(auth, user =>{
      if(user)
    {
      console.log("User is signed in:", user);
    }
    else{
      console.log("No user is signed in.");
    }
    });
  
    