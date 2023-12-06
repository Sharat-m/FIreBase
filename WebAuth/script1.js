const loginButton = document.getElementById('loginButton');
const loginModal = document.getElementById('loginModal');

loginButton.addEventListener('click', () => {
  loginModal.style.display = 'block';
});

function closeModal() {
  loginModal.style.display = 'none';
}

// Example for Google authentication
const googleSignInButton = document.getElementById('googleSignInButton');

googleSignInButton.addEventListener('click', () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      // Handle successful sign-in
      const user = result.user;
      console.log(user);
      closeModal();
    })
    .catch((error) => {
      // Handle errors
      console.error(error);
    });
});

// Similar logic applies to Facebook and email authentication.

// Example for Facebook authentication
const facebookSignInButton = document.getElementById('facebookSignInButton');

facebookSignInButton.addEventListener('click', () => {
  // Implement Facebook authentication logic
  // ...
});

// Example for email authentication
const emailSignInButton = document.getElementById('emailSignInButton');

emailSignInButton.addEventListener('click', () => {
  // Implement email authentication logic
  // ...
});

// Handle user state changes
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in
    console.log('User is signed in:', user);
  } else {
    // User is signed out
    console.log('User is signed out');
  }
});
