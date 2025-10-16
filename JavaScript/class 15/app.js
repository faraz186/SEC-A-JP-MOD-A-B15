var firebaseConfig = {
  apiKey: "AIzaSyArYdnLGjvWvqStxPm9rrBoAgSs874wVHE",
  authDomain: "stopwatch786-19657.firebaseapp.com",
  projectId: "stopwatch786-19657",
  storageBucket: "stopwatch786-19657.firebasestorage.app",
  messagingSenderId: "259932942806",
  appId: "1:259932942806:web:0e23932ba1925f65fe7477",
  measurementId: "G-6WTVYE3KBZ",
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);

var auth = firebase.auth();

// signup user

function signup() {
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");

  auth
    .createUserWithEmailAndPassword(emailInput.value, passwordInput.value)
    .then(function (response) {
      console.log(response);

      response.user
        .sendEmailVerification()
        .then(function (response) {
          console.log("email verification sent");
        })
        .catch(function (error) {
          console.log(error);
        });

      Swal.fire({
        title: "SignUp Successfully!",
        icon: "success",
      });

      //   window.location.href = "./login.html";
    })
    .catch(function (error) {
      console.log(error);
    });
}

// Login user

function login() {
  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");

  auth
    .signInWithEmailAndPassword(emailInput.value, passwordInput.value)
    .then(function (response) {
      console.log(response);
      Swal.fire({
        title: "Login Successfully!",
        icon: "success",
      });

      //   window.location.href = "./login.html";
    })
    .catch(function (error) {
      Swal.fire({
        title: "Warning!",
        text: "Something went wrong",
        icon: "error",
      });
    });
}

function LoginwithGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
