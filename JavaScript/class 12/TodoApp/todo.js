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

    liELement.appendChild(liText);

    liELement.appendChild(delBtnELEMENT);

    ulELement.appendChild(liELement);

    input.value = "";
  } else {
    alert("required fields are missings");
  }
}
