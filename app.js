const calcBody = document.getElementById('calcBody');
const currentNumber = document.getElementById("currentNumber");
let displayValue = '';
currentNumber.textContent = displayValue;
const equationPreview = document.getElementById("equationPreview");
const clrBtn = document.getElementById("clr");
const delBtn = document.getElementById("del");

clrBtn.addEventListener("click", clear());
delBtn.addEventListener("click", backSpace());

// Operator functions:
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, sign) {
    return sign === '+' ? add(a, b)
        : sign === '-' ? subtract(a, b)
        : sign === '*' ? multiply(a, b)
        : divide(a, b);
}

// Display functions:
function displayCurrent(btn) {
    if (btn.textContent === '.' && currentNumber.textContent.includes('.')) {
        return
    } 
    currentNumber.textContent += btn.textContent;
}

function backSpace(btn) {
    displayValue = currentNumber.textContent.slice(0, (displayValue.length - 1))
}
    // To-do: 
    
    // Clear function