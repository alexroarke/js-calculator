const display = document.querySelector('input#display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

const changeDisplay = function () {
  display.value += this.innerHTML;
};

for (number of numbers) {
  number.addEventListener("click", changeDisplay);
}

for (operator of operators) {
  operator.addEventListener("click", changeDisplay);

  value = operator.value;

  if (value == 'C') {
    display.value = "";
  }
}