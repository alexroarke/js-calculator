const display = document.querySelector('input#display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

// initial count 
let count = 0;

// first number clicked 
let num1 = 0;

// second number clicked
let num2 = 0;

// function that takes in a value and changes the display screen
const changeDisplay = function () {
  display.value += this.innerHTML;

  if (count < 1) {
    num1 += parseInt(this.innerHTML);
    count++;
  }
  else if (count >= 1) {
    resetDisplay();
    display.value = this.innerHTML;
    num2 += parseInt(this.innerHTML);
    count = 0;
  }
};

// change display when a number is clicked
for (number of numbers) {
  number.addEventListener("click", changeDisplay);
}

// create a helper function to perform math operations

const mathOperation = function () {
  let operator = this.innerText;

  if (operator == 'C') {
    clear();
  }
  else if (operator == '+') {
    const evaluate = sum(num1, num2);
  }
  else if (operator == '-') {
    substract(num1, num2);
  }
  else if (operator == 'x') {
    multiply(num1, num2);
  }
  else if (operator == '/') {
    division(num1, num2);
  }
};

// add event listener on math operators
for (operator of operators) {
  operator.addEventListener("click", mathOperation);
}

// reset display when math operator is clicked 
const resetDisplay = function () {
  return display.value = 0;
};

// sum function
const sum = function (num1, num2) {
  return display.value = num1 + num2;
};

// substract function 
const substract = function (num1, num2) {
  return display.value = num1 - num2;
};

// multiply function
const multiply = function (num1, num2) {
  return display.value = num1 * num2;
};

// division function 
const division = function (num1, num2) {
  return display.value = num1 / num2;
};

// equal to function 
const equalTo = function () {
  display.value = evaluate;
};

// clear everything 
const clear = function () {
  return display.value = "";
};