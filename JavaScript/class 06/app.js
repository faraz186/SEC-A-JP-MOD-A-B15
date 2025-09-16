var userInput = prompt("Enter a string"); 
        
var len = userInput.length;

var flag = false; 

for (var i = 0; i < len; i++) {
  if (userInput.slice(i, i + 1) === "!") {
    flag = true;
    alert("! found..");
  }
} 

if (flag === false) {
  alert("No !  found..");
}

var str =
  "The New Yorker magazine doesn't allow the phrase World War II. They say it should be World War II.";

var findIndex = str.indexOf("World War II");

var firstText = str.slice(0, findIndex);

var replaceText = "The Second World War";

var remainText = str.slice(findIndex + 12);

console.log(firstText + replaceText + remainText);

console.log(findIndex);



var str = "To be or not to be.";

console.log(str.lastIndexOf("be"));


var str =
  "The New Yorker magazine doesn't allow the phrase World War II. They say it should be World War II.";


console.log(str.replace("World War II", "The Second World War"));


console.log(str.replaceAll("New Yorker", "New York Times"));


var str = "make something strange";

console.log(str.slice(0, 1));

console.log(str.charAt(3));

var str =
  "The New Yorker magazine doesn't allow the phrase World War II. They say it should be World War II.";

console.log(str.replace(/World War II/g, "the second world war"));

var convert = parseInt("20");


console.log(typeof convert);

var number = 20;

var convert = number.toString();

console.log(typeof convert);


var random = Math.random();

console.log(Number(random.toFixed(2)));

var headUser = prompt("Enter head username");

var tailUser = prompt("Enter tail username");

var toss = Math.random();

var round = Math.round(toss);

if (round === 0) {
  console.log(headUser, " win the game");
} else {
  console.log(tailUser, " win the game");
}

// program to generate random password



// Date

var date = new Date();

console.log(
    date.toString().slice(0, 15)
);


var daysArr = [
  "اتوار",
  "پیر",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

var date = new Date();

console.log(daysArr[date.getDay()]);












