var firebaseConfig = {
  apiKey: "AIzaSyArYdnLGjvWvqStxPm9rrBoAgSs874wVHE",  
  authDomain: "stopwatch786-19657.firebaseapp.com",
  projectId: "stopwatch786-19657",
  databaseURL: "https://stopwatch786-19657-default-rtdb.firebaseio.com",
  storageBucket: "stopwatch786-19657.firebasestorage.app",
  messagingSenderId: "259932942806",
  appId: "1:259932942806:web:0e23932ba1925f65fe7477",
  measurementId: "G-6WTVYE3KBZ",
};

var app = firebase.initializeApp(firebaseConfig);

var database = firebase.database();

// save Data from database

function saveData() {
  var name = document.getElementById("name");
  var age = document.getElementById("age");
  var city = document.getElementById("city");

  var uid = Math.round(Math.random() * 514514515);

  var userObj = {
    user_id: uid,
    user_name: name.value,
    user_age: age.value,
    user_city: city.value,
  };

  // set()

  var saveData = firebase.database().ref("users").child(uid).set(userObj);

  console.log(saveData);

  name.value = "";
  age.value = "";
  city.value = "";

  // push()

  //   var saveData = firebase.database().ref("users").push(userObj);

  //   console.log(saveData);
}

function getDataFromDatabase() {
  firebase
    .database()
    .ref("users")
    .on("child_added", function (data) {
      var li = document.createElement("li");
      var ul = document.getElementById("list");
      var liText = document.createTextNode(data.val().user_name);

      li.appendChild(liText);

      ul.appendChild(li);
      console.log(data.val().user_name);
    });
}

getDataFromDatabase();

function deleteDataFromDatabase() {
  firebase.database().ref("users").child("466337395").remove();
}

deleteDataFromDatabase();

// edit data

function editDataFromDatabase() {
  firebase.database().ref("users").child("159865636").set({
    user_name: "Muhammad Ahmed",
    user_age: 15,
    user_city: "lahore",
  });
}

editDataFromDatabase();

// string methods:-

// substring()

var str = "hello user welcome to our website";

console.log(str.substring(0, 3));

// reverse()

var arr = [1, 2, 3, 4, 5];

console.log(arr.reverse());

// join()

var str = "hello user welcome to our website";

var splitted = str.split(" ");

console.log(splitted.join(" "));

// split()

var str = "hello user welcome to our website";

var splitted = str.split(" ");

console.log(splitted);

// includes()

var str = "hello user welcome to our website";

console.log(str.includes("user"));

// startswith()

var str = "hello user welcome to our website";

console.log(str.startsWith("m"));

// endswith()

console.log(str.endsWith("e"));

var country_list = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua &amp; Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia &amp; Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Cape Verde",
  "Cayman Islands",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D Ivoire",
  "Croatia",
  "Cruise Ship",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Kyrgyz Republic",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Pierre &amp; Miquelon",
  "Samoa",
  "San Marino",
  "Satellite",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "St Kitts &amp; Nevis",
  "St Lucia",
  "St Vincent",
  "St. Lucia",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor L'Este",
  "Togo",
  "Tonga",
  "Trinidad &amp; Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks &amp; Caicos",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (US)",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

var arr = [];

for (var i = 0; i < country_list.length; i++) {
  if (country_list[i].includes("is")) {
    arr.push(country_list[i]);
  }
}

console.log(arr);













