// array

// var arr = ["faraz", "faraz@gmail.com", "karachi", 25];

// console.log(arr[1]);

// Objects

// key : value

// var obj = {
//   name: "faraz",
//   email: "faraz@gmail.com",
//   city: "lahore",
//   courses: ["html", "css", "js"],
//   age: 25,
// };

// console.log(obj.courses[2]);

// var stdObj = {
//   stdName: "abc",
//   stdEmail: "abc@gmail.com",
//   stdAge: 25,
//   stdLocation: {
//     city: "karachi",
//     longitude: 52,
//     latitude: 21,
//   },
// };

// var response = "stdAge" in stdObj;

// delete stdObj.stdEmail;

// console.log(response);

// methods

// var obj = {
//   name: "faraz",
//   city: "karachi",
//   getName: function () {
//     console.log(obj.name);
//   },
// };

// console.log(obj.getName());

// console.log(
//     obj.getName()

// );

// document.write(12);
// console.log(12);

// function

// 1) types of function

// . function declaration

// function abc(){
//     console.log("hello");

// }

// abc()

// . Anonymous function

// var func = function () {
//   console.log("hello");
// };

// func();

// . Arrow function / fat arrow function

// function greet(message) {
//   return message;
// }

// var getValue = greet("hello students");

// console.log(getValue);

// var calc = {
//   getSum: function (a, b) {
//     return a + b;
//   },
//   getSub: function (a, b) {
//     return a - b;
//   },
//   getMult: function (a, b) {
//     return a * b;
//   },
//   getDiv: function (a, b) {
//     return a / b;
//   },
// };

// console.log(calc.getSub(20, 15));

// console.log(calc.getMult(20, 15));

// var obj = {
//   stdName: "abc",
//   stdEmail: "abc@gmail.com",
//   stdAge: 25,
//   stdLocation: {
//     city: "karachi",
//     longitude: 52,
//     latitude: 21,
//   },
// };

// console.log(obj);

// obj.prototype.getName = function () {
//   return "faraz";
// };

// var userObj1 = {
//     name:"faraz",
//     age:25,
//     city:'karachi'
// }

// var userObj2 = {
//     name:"hamza",
//     age:20
// }

// var userObj3 = {
//     name:"ali",
//     age:28
// }

function Student(name, age, city) {
  (this.Stdname = name),
   (this.Stdage = age), 
   (this.Stdcity = city);
}

Student.prototype.getName = function () {
  return obj1.Stdname;
};

var obj1 = new Student("faraz", 25, "lahore");

console.log(obj1.getName());

// var obj2 = new Student("hamza", 20, "karachi");

// console.log(obj1);

// console.log(obj2);

// function Packages(name, data, services) {
//   this.name = name;
//   this.transferData = data;
//   this.services = services;
// }

// var obj = new Packages
// ("basic", "45 GB", "3G");

// var obj1 = new Packages
// ("permuim", "10 GB", "4G");

// console.log(obj1);
