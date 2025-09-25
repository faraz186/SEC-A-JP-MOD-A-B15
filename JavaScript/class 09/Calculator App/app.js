var input = document.getElementById("resultValue");

function getValue(value) {

  input.disabled = true;

  input.value = input.value + value;
}

function clrAll() {

  input.value = "";
}

function square() {

  input.value = input.value * input.value;
}

function deleteChar() {

  input.value = input.value.slice(0, -1);
}

function equal() {

  input.value = eval(input.value);
}
