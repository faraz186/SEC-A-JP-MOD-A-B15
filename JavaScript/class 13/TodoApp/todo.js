var input = document.getElementById("todo");

function addTodo() {
  if (input.value.trim() !== "") {
    var liELement = document.createElement("li");
    var liText = document.createTextNode(input.value);
    var ulELement = document.getElementById("todoList");

    // delete button element

    var delBtnELEMENT = document.createElement("button");
    var delBtnText = document.createTextNode("Delete");

    delBtnELEMENT.appendChild(delBtnText);

    delBtnELEMENT.setAttribute("onclick", "deleteSingleItem(this)");

    // edit button element

    var editBtnELEMENT = document.createElement("button");

    var editBtnText = document.createTextNode("Edit");

    editBtnELEMENT.appendChild(editBtnText);

    editBtnELEMENT.setAttribute("onclick", "editSingleItem(this)");

    liELement.appendChild(liText);

    liELement.appendChild(delBtnELEMENT);

    liELement.appendChild(editBtnELEMENT);

    ulELement.appendChild(liELement);

    input.value = "";
  } else {
    alert("required fields are missings");
  }
}

function deleteAll() {
  var ulElement = document.getElementById("todoList");

  ulElement.innerHTML = "";
}

function deleteSingleItem(e) {
  e.parentNode.remove();
}

function editSingleItem(e) {
  var updatedValue = prompt("ENter updated value");

  e.parentNode.firstChild.nodeValue = updatedValue;
}



// CRUD Operation


// c = create
// r = read
// u = update
// d = delete
