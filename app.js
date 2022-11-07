const calcBody = document.getElementById('calcBody');
const currentNumber = document.getElementById("currentNumber");
const equationPreview = document.getElementById("equationPreview");
const clrBtn = document.getElementById("clr");
const delBtn = document.getElementById("del");
clrBtn.addEventListener("click", clear);
delBtn.addEventListener("click", backSpace);

const numbers = document.querySelectorAll(".numBtn");
numbers.forEach((btn) => btn.addEventListener("click", () => displayCurrent(btn.textContent)));

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
function displayCurrent(number) {
    currentNumber.textContent += number;
}

function displayPoint(point) {
    if (currentNumber.textContent = '') {
        currentNumber.textContent = '0';
    }
    if (currentNumber.textContent.includes('.')) return
    currentNumber.textContent += point;
}

function backSpace() {
    currentNumber.textContent = currentNumber.textContent
        .toString()
        .slice(0, -1);
}

function clear() {
    equationPreview.textContent = "";
    currentNumber.textContent = "";
}