// array
 
// var city1 = "karachi"; 
// var city2 = "lahore";
// var city3 = "quetta";
// var city4 = "islamabad";
// var city5 = "multan";

var numbers = [1,2,3,4,5,6,7,8,9];

var numbers = [1,2,3,4,5,6,7,8,9];

var cities = ["karachi",'lahore','multan'];

// index number

console.log(cities[2]);

var mixedArray = [100,'faraz',false,undefined,"farooq",50];

console.log(mixedArray[4]);

var arr = ["ali"];

arr[1] = 5000;

arr[7] = "faraz"

console.log(arr);

var cities = [];

cities[0] = "karachi";

cities[1] = "lahore"

console.log(cities);

// array methods

// pop()

var arr = ["faraz", "hamza"];

arr.pop()
// arr.pop()

console.log(arr);

// push()

var arr = ["faraz","hamza"];

arr.push("ali","ahmed",50,true)

console.log(arr);

// shift()

var arr = ["faraz","hamza"];

arr.shift()

console.log(arr);

// unshift()

var arr = ["faraz","hamza"];

arr.unshift("farooq","arsalan");

console.log(arr);

// splice()

var cities = ["karachi",'lahore',"multan","peshawar"];

cities.splice(0,3)

cities.splice(1,3,"islamabad");

cities.splice(3,0,"quetta");

cities.splice(2,2);

cities.splice(3,0,"islamabad");

console.log(cities);

// slice()

var cities = ["karachi",'lahore',"multan","peshawar"];

var copy = cities.slice(0,)

console.log(copy);



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

var copy = country_list.slice(0);

console.log(copy);




var password = prompt("Enter password");

var confirmPassword = prompt("Enter confirm password");

if(password && confirmPassword){
    if(password == confirmPassword){
        console.log("correct");

    }
    else{
        console.log("Incorrect");

    }
   
}
else{
    console.log("fail");
    
}


var firstSubject = +prompt("Enter your maths marks");

var secondSubject = +prompt("Enter your english marks");

var thirdSubject = +prompt("Enter your sindhi marks");

if(firstSubject >100 || firstSubject <0 ||secondSubject >100 || secondSubject <0||thirdSubject >100 || thirdSubject <0){
    console.log("Enter Between 0 to 100");
    
}
else{

var obtainedMarks = firstSubject + secondSubject + thirdSubject;

var percentage = obtainedMarks / 300 * 100;

if(percentage >= 80 && percentage <= 100){
    document.write("A-one","<br>");
    document.write("Excellent");

}
else if(percentage >= 70 && percentage <= 79){
    document.write("A","<br>");
    document.write("Good");
}
else if(percentage >= 60 && percentage <= 69){
       document.write("B","<br>");
    document.write("you need to improve");
}
// else if(){}
else{
    document.write("FAIL","<br>");
    document.write("Sorry");
}

}


