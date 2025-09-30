var h1Element = document.getElementById("h1");
 
var pELement = document.getElementById("p1");

console.log(h1Element.innerText);
console.log(pELement.innerText);

// diff b/w innerHTML & innerText

var divContainer = document.getElementById("main");

divContainer.innerHTML = "<h1>Hello world</h1>";

function completePara() {
  var paraELement =
  document.getElementById("para");

  var anchorELement =
  document.getElementById("link");

  if (anchorELement.innerText === "Read more") {
    paraELement.innerText =
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe dolores libero, inventore vitae eum impedit alias cum magnam facere veniam, consequuntur, nostrum maxime aut at fugiat iure vel temporibus! Officiis natus facere tempore vel vero, nobis sed ab eligendi, ipsa maiores soluta, repellat iste libero quia. Beatae perferendis maxime amet.";

    anchorELement.innerText = "Read less";
  } else {
    paraELement.innerText =
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.";

    anchorELement.innerText = "Read more";
  }
}

var link = document.getElementById("anchor");

link.innerText = "Google";

link.href = "https://www.google.com";

link.target = "_blank";

console.log(link);

var imgElement = document.getElementById("img");

imgElement.src =
  "https://images.pexels.com/photos/1533483/pexels-photo-1533483.jpeg?cs=srgb&dl=light-dawn-landscape-1533483.jpg&fm=jpg";

imgElement.width = "200";

function invisible() {
    imgElement.style.visibility = "hidden";

  imgElement.style.display = "none";
}

var pElement = document.getElementById("para");

pElement.className = "paragrapgh";

pElement.className += " paragrapgh";

console.log(pElement);

var divElement = document.getElementById("main");

var inputElement = document.getElementById("field");

inputElement.style.border = "none";
inputElement.style.outline = "none";
inputElement.style.backgroundColor = "grey";
inputElement.style.padding = "6px";
inputElement.style.borderRadius = "6px";

divElement.style.backgroundColor = "lightgreen";

target all elements by tag name

var allParas = document.getElementsByTagName("p");

console.log(allParas);

for (var i = 0; i < allParas.length; i++) {
  console.log(allParas[i]);
  allParas[i].style.color = "red";
}

target all elements by class name

var input = document.getElementsByClassName("inputField");

console.log(input);

setInterval()

var interval;

function timer() {
  console.log("set interval function call...");
}

interval = setInterval(timer, 1000);


function stop() {
  clearInterval(interval);
}

setTimeout()

function timer() {
  console.log("set interval function call...");
}

setTimeout(timer, 4000);



function greet() {
  console.log("set interval function call...");
}

setTimeout(greet, 8000);




