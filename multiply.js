function multiplyMe(prompt) {
  let readlineSync = require("readline-sync");
  let number = readlineSync.question(prompt);
  return number;
}

let firstNumber = multiplyMe("Give me the first number to multiply");
let secondNumber = multiplyMe("Give me a second number to multiply");
console.log(Number(firstNumber) * Number(secondNumber));
