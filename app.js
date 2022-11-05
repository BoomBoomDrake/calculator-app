const calcBody = document.querySelector('.calcBody');

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