var divELement = document.getElementById("container");

var divELement = document.childNodes[1].childNodes[1];

console.log(divELement.nodeType);

var divELement = document.getElementById("container");

console.log(divELement.firstChild.nodeName);

console.log(divELement.firstChild.nextSibling);

console.log(divELement.firstChild.nodeType);

console.log(divELement.firstChild);

console.log(divELement.parentNode);

console.log(divELement.lastChild);

var link = document.getElementById("anchor");

link.setAttribute("href", "https://www.facebook.com");

var getAttr = link.getAttribute("href");

link.href = "https://www.facebook.com";

console.log(link.hasAttribute("class"));

console.log(link.attributes[1].nodeValue);




var h1Element = document.createElement("h1");

var h1Text = document.createTextNode("Hello students");

var divELEMENT = document.getElementById("main");

h1Element.appendChild(h1Text);

divELEMENT.appendChild(h1Element);

console.log(h1Element);

var h1Element = document.createElement("h1");
var pElement = document.createElement("p");
var aElement = document.createElement("a");

var h1Text = document.createTextNode("heading");
var pText = document.createTextNode("lorem ipsum dolor");
var aText = document.createTextNode("Google");

var divELEMENT = document.getElementById("main");

h1Element.appendChild(h1Text);
pElement.appendChild(pText);
aElement.appendChild(aText);

aElement.setAttribute("href", "https://www.google.com");

divELEMENT.appendChild(h1Element);
divELEMENT.appendChild(pElement);
divELEMENT.appendChild(aElement);

console.log(h1Element, pElement, aElement);
