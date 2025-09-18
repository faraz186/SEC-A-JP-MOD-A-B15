var randomValues =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";        

var randomValLen = randomValues.length;

var passwordGenerator = "";

for (var i = 0; i < 10; i++) {
  var randomNumbers = Math.floor(Math.random() * randomValLen);

  passwordGenerator = passwordGenerator + randomValues[randomNumbers];
}

console.log(passwordGenerator);


// palindrome program

// civic

// civic

// madam

// radar

// faraz

// zaraf

var word = "refer";

var len = word.length;

var reverse = "";

for (var i = len - 1; i >= 0; i--) {
  reverse = reverse + word[i];
}

if (reverse === word) {
  console.log("it's a palindrome word");
} else {
  console.log("it's not a palindrome word");
}

var RamadanMilliSeconds = new Date("Feb 17 2026").getTime();

var currentMilliSeconds = new Date().getTime();

var diff = RamadanMilliSeconds - currentMilliSeconds;

var month = Math.round(diff / (1000 * 60 * 60 * 24 * 30));

console.log(month);

console.log("ramadan milliseconds", RamadanMilliSeconds);

console.log("current milliseconds", currentMilliSeconds);



var daysArr = [
  "Sunday",
  "Monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

console.log(daysArr[date.getDay()]);
console.log(date.getTime());

console.log(date.toString().slice(0, 15));


var date = new Date();

date.setFullYear(2002);

date.setMonth(6);

date.setDate(29);

console.log(date);


// function

// if ("1" == 1) {
//   console.log("hello world");
// }

function faraz() {
  console.log("hello world");
}

faraz(); // function call
faraz(); // function call
faraz(); // function call
faraz(); // function call
faraz(); // function call



function calc() {
  var RamadanMilliSeconds = new Date("Feb 17 2026").getTime();

  var currentMilliSeconds = new Date().getTime();

  var diff = RamadanMilliSeconds - currentMilliSeconds;

  var month = Math.round(diff / (1000 * 60 * 60 * 24 * 30));

  console.log(month);

  console.log("ramadan milliseconds", RamadanMilliSeconds);

  console.log("current milliseconds", currentMilliSeconds);
}

calc();


function add() {
  var num1 = +prompt("Enter first number");
  var num2 = +prompt("Enter second number");

  console.log(num1 + num2);
}

add();






