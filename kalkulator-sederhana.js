// Membuat kalkulator sederhana. 
// Hanya bisa menginput 2 angka.
// Bisa melakukan Addition, Subtraction, Multiplecation, Division.

let prompt = require('prompt-sync')();

// Hasil datatype : Integer
let firstInput = prompt("First Input :");
let secondInput = prompt("Second Input :");
let operator = prompt("Pilih Operator : "); // +, -, /, * 

// Convert menjadi integer
firstInput = +firstInput;
secondInput = +secondInput;


if (operator === "+") {
    result = firstInput + secondInput;
} else if (operator === "-") {
    result = firstInput - secondInput;
} else if (operator === "/") {
    result = firstInput / secondInput;
} else if (operator === "*") {
    result = firstInput * secondInput;
} else {
    result = "Invalid Input";
}

console.log(result);

