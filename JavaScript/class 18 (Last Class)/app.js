var firebaseConfig = {  
  apiKey: "AIzaSyBy6VhxVg31U833ivNWu1nOJQK6aBNnnyc",
  authDomain: "add-to-cart-46231.firebaseapp.com",
  databaseURL: "https://add-to-cart-46231-default-rtdb.firebaseio.com",
  projectId: "add-to-cart-46231",
  storageBucket: "add-to-cart-46231.firebasestorage.app",
  messagingSenderId: "433655776517",
  appId: "1:433655776517:web:a9ed924b47640dd878236c",
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);

function signup() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, pass)
    .then(function (response) {
      console.log(response);
      var user_uid = response.user.uid;

      //   store data in database

      var obj = {
        user_name: name,
        user_email: email,
      };

      firebase.database().ref("manage_users").child(user_uid).set(obj);

      setTimeout(function () {
        window.location.href = "./index.html";
      }, 3000);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function login() {
  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, pass)
    .then(function (response) {
      console.log(response);

      var user_uid = response.user.uid;

      // get data from database

      firebase
        .database()
        .ref("manage_users/" + user_uid)
        .on("child_added", function (data) {
          console.log(data.val());

          localStorage.setItem("userName", data.val());
        });

      setTimeout(function () {
        window.location.href = "./home.html";
      }, 3000);
    })
    .catch(function (err) {
      console.log(err);
    });
}


