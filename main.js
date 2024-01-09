// add
function getSum(num1, num2) {
  return num1 + num2;
}

// subtract
function getDifference(num1, num2) {
  return num1 - num2;
}

// multiply
function getProduct(num1, num2) {
  return num1 * num2;
}

// divide
function getQuotient(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  switch (operator) {
    case '+':
      return getSum(num1, num2);
    case '-':
      return getDifference(num1, num2);
    case '*':
      return getProduct(num1, num2);
    case '/':
      return getQuotient(num1, num2);
    default:
      console.error('Unknown operator');
  }
}

let num1 = 1;
let num2 = -0.5;
let operator = '/';

console.log(operate(operator, num1, num2));

const calculatorDisplay = document.querySelector('.display');

let displayValue = '';

function handleDigitButtonClick(e) {
  const digit = e.target.value;
  console.log(digit);
  displayValue += digit;
  calculatorDisplay.textContent = displayValue;
}

const digitButtons = document.querySelectorAll('.digit');

digitButtons.forEach((button) => {
  button.addEventListener('click', handleDigitButtonClick);
});

