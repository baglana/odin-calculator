// add
function getSum(num1, num2) {
  return Number(num1) + Number(num2);
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

let num1;
let num2;
let operator = '';
let displayValue = '';

const display = document.querySelector('.display');
const digitButtons = document.querySelectorAll('.digit');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('button[value="="]');
const clearButton = document.querySelector('button[type="reset"]');

function updateDisplay() {
  display.textContent = displayValue;
}

function handleDigitButtonClick(e) {
  const digit = e.target.value;
  console.log(digit);
  
  if (num2) {
    displayValue = digit;
    num2 = null;
  } else {
    displayValue = displayValue.concat(digit);
  }

  updateDisplay();
}

function handleOperatorButtonClick(e) {
  if (operator) {
    handleEqualsButtonClick();
  }
  operator = e.target.value;
  num1 = displayValue;
  displayValue = '';
  console.log("operator", operator);
  console.log("num1 (displayValue)", num1);
}

function handleEqualsButtonClick() {
  num2 = displayValue;
  console.log("num2", num2);
  console.log("operator", operator);
  
  if (!num2 || !operator) {
    return;
  }

  if (num2 === '0' && operator === '/') {
    alert('Division by zero is undefined');
    return;    
  }
  
  displayValue = +operate(operator, num1, num2).toFixed(9);
  console.log("displayValue", displayValue);
  updateDisplay();

  operator = '';
}

digitButtons.forEach((button) => {
  button.onclick = handleDigitButtonClick;
});

operatorButtons.forEach((button) => {
  button.onclick = handleOperatorButtonClick;
});

equalsButton.onclick = handleEqualsButtonClick;

clearButton.onclick = () => {
  num1 = null;
  num2 = null;
  operator = '';
  displayValue = '';
  updateDisplay();
};