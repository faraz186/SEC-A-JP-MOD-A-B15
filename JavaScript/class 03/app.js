document.write("<h1>Hello <br> JS</h1>");
           
document.write("<ol><li>Apple</li> </ol>");

document.write("<p>js stands for javascript</p>");



var input1 = parseInt(prompt("Enter first number"));

var input2 = parseInt(prompt("Enter second number"));

var sum = input1 + input2;

console.log(sum);



// js is a case sensitive

// Alert(500);

var userInput = +prompt("Enter a number");

document.write(
  userInput,
  " x 1 = ",
  userInput * 1,
  "<br>",
  userInput,
  " x  2 = ",
  userInput * 2,
  "<br>",
  userInput,
  " x  3 = ",
  userInput * 3,
  "<br>",
  userInput,
  " x  4 = ",
  userInput * 4,
  "<br>",
  userInput,
  " x  5 = ",
  userInput * 5,
  "<br>",
  userInput,
  " x  6 = ",
  userInput * 6,
  "<br>",
  userInput,
  " x  7 = ",
  userInput * 7,
  "<br>",
  userInput,
  " x  8 = ",
  userInput * 8,
  "<br>",
  userInput,
  " x  9 = ",
  userInput * 9,
  "<br>",
  userInput,
  " x  10 = ",
  userInput * 10
);

// if else statement

// var userAge = +prompt("Enter your age");

// {} block of code / statement

// Boolean true, false

var userAge = +prompt("Enter your age");

if (userAge >= 18) {
  console.log("eligible for CNIC");
}

var userCity = prompt("Enter your city");

if (userCity === "karachi") {
  console.log("allow");
}

var rollNo = +prompt("Enter your roll number");

if (rollNo !== 12345) {
  console.log("allow");
} else {
  console.log("not allow");
}

// percentage program

var percentage = +prompt("Enter your percentage");

if (percentage >= 80) {
  alert("A+ grade");
} else if (percentage >= 70) {
  alert("A grade");
} else if (percentage >= 60) {
  alert("b grade");
} else if (percentage >= 50) {
  alert("c grade");
} else if (percentage >= 40) {
  alert("d grade");
} else {
  alert("good luck..");
}

// program excercise

var userGender = prompt("Enter your gender");
var message;

if (userGender == "male") {
  message = "welcome Sir";
} else if (userGender == "female") {
  message = "welcome Maam";
} else {
  message = "incorrect input..";
}

console.log(message);

// logical operators

// && and operator

// || or operator

var weight = +prompt("Enter your weight");

var time = +prompt("Enter your time");

if (weight > 90 || time < 6) {
  alert("Come to our tryout!");
} else {
  alert("Come to our cookout!");
}

// lowercase
// uppercase

var age = +prompt("Enter your age");

var place = prompt("Enter your place");

if (age > 65 || (age < 21 && place === "Pak")) {
  console.log("allow");
} else {
  console.log("not allow");
}

var userCity = prompt("Enter your city");

if (userCity.toLowerCase() === "karachi") {
  console.log("allow");
} else {
  console.log("not allow");
}

var age = +prompt("Enter your age");

var place = prompt("Enter your place");

if (place === "Pak") {
  if (age > 65 || age < 21) {
    console.log("allow");
  } else {
    console.log("not allow");
  }
} else {
  console.log("not allow");
}

if (age > 65 || (age < 21 && place === "Pak")) {
  console.log("allow");
} else {
  console.log("not allow");
}

// nested-if statement

var prog_lan = prompt("Enter programming language");

if (prog_lan === "js") {
  var city = prompt("Enter your city");

  if (city.toLowerCase() === "karachi") {
    var exp = prompt("Enter your experience");
    if (exp > 2) {
      console.log("you are hire");
    } else {
      console.log("experience lao");
    }
  } else {
    console.log("karachi ajao foran");
  }
} else {
  console.log("javascript sikh kar ao");
}











