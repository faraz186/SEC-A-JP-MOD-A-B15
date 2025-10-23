var firebaseConfig = {
  apiKey: "AIzaSyBy6VhxVg31U833ivNWu1nOJQK6aBNnnyc",
  authDomain: "add-to-cart-46231.firebaseapp.com",
  projectId: "add-to-cart-46231",
  storageBucket: "add-to-cart-46231.firebasestorage.app",
  messagingSenderId: "433655776517",
  appId: "1:433655776517:web:75836c392e21fd2278236c",
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);

var db = firebase.database();

var arr = [];

var counter = document.getElementById("counter");

counter.style.backgroundColor = "red";
counter.style.color = "white";
counter.style.padding = "6px 12px";
counter.style.borderRadius = "50%";
counter.style.fontWeight = "bold";

function addProduct(img, title, desc) {
  var obj = {
    id:1,
    product_image: img,
    product_title: title,
    product_desc: desc,
  };

  //   save Data from database

  firebase.database().ref("products").push(obj);

  arr.push(obj);
  counter.innerHTML = arr.length;
}

console.log(arr);

firebase
  .database()
  .ref("products")
  .on("child_added", function (data) {
    var trow = document.getElementById("trow");

    var imgElement = document.createElement("img");

    var manage_desc_data = data.val().product_desc;
    var manage_title_data = data.val().product_title;
    var manage_pic_data = data.val().product_image;

    imgElement.setAttribute("src", manage_pic_data);

    trow.innerHTML += `<tr><td class='td'><img class='products_img' src=${manage_pic_data} /></td><td class='td'>${manage_title_data} </td><td class='td'>${manage_desc_data} </td></tr>`;

    console.log(data.val());
  });
