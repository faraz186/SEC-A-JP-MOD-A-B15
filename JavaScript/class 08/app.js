function abc() {
  console.log("hello students");          
}

for (var i = 1; i <= 6; i++) {
  abc();
}

function add(num1, num2) {
  // parameter
  console.log(num1 + num2);
}

add(+prompt("Enter first number"), +prompt("Enter second number")); // argument 

function greet(name) {
  console.log("my name is ", name, "and I am a Instructor");
}

greet(prompt("Enter your name"));

function sum(a, b, c) {
  console.log(a + b + c);
}

sum(10, 20);



var arr = [1, 2, 3, 4, 5];

var copy = arr.slice(1, 4);

console.log(arr);

function sum(a, b) {
  var add = a + b;

  return add;
}

var getVAL = sum(50, 50);

console.log(getVAL);



function getName(name) {
  return name;
}

var get = getName("faraz");
console.log(get);


var greet; // global variable


function abc() {
  console.log(greet);
}

abc();


function abc() {
  var greet; // local variable
}
console.log(greet);

abc();



// switch statement

// it works only single condition

var city = prompt("Enter your city");

if (city.toLowerCase() == "karachi") {
  console.log("allow");
} else {
  console.log("not allow");
}

var city = prompt("Enter your city").toLowerCase();

switch (city) {
  case "karachi":
    alert("allow");
    break;
  case "lahore":
    alert("allow");
    break;

  case "multan":
    alert("allow");
    break;

  default:
    alert("not allow");
}

for (var i = 2; i < 1; i++) {
  console.log(i);
}

// while loop

var i = 2;

while (i < 1) {
  console.log(i);
  i++;
}

// do-while loop

var i = 2;

do {
  console.log(i);
  i++;
} while (i < 1);

function multiplicationTable(tableNum, range) {
  for (var i = 1; i <= range; i++) {
    document.write(tableNum, "x", i, "=", tableNum * i, "<br>");
  }

  // var i = 1;
  // do {
  //   document.write(tableNum, "x", i, "=", tableNum * i, "<br>");
  //   i++;
  // } while (i <= range);

  var i = 1;
  while (i <= range) {
    document.write(tableNum, "x", i, "=", tableNum * i, "<br>");
    i++;
  }
}

multiplicationTable(prompt("Enter a number"), prompt("Enter a range"));

/*
var num = 20;

console.log(num);
*/

// if(falses){

//     alert();
// }

function submit() {
  Swal.fire(
{
    title: "Good job!",
    text: "form submitted successfully..!",
    icon: "success",
});
}











