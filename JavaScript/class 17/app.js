// local Storage
      
// local storage is a temporary database

// where data is stored.

// data store

var user = {
  id: 1,
  name: "abc",
  city: "lahore",
};

var convert = JSON.stringify(user);

localStorage.setItem("biodata", convert);

localStorage.setItem("name", "faraz");
localStorage.setItem("age", 25);
localStorage.setItem("email", "faraz@gmail.com");

// Data single key remove from localstorage

localStorage.removeItem("biodata");


// Delete all data remove from localstorage


localStorage.clear()


// data get from local storage

var getData = localStorage.getItem("biodata");

var getData1 = localStorage.getItem("email");

// data convert string into object

console.log(JSON.parse(getData));

// console.log(getData1);











