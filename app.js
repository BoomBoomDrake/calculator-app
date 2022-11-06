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

// Display functions:
function displayCurrent(btn) {
    if (btn.className == 'opBtn') {
        equationPreview.textContent = `${currentNumber.textContent} ${btn.textContent}`;
        currentNumber.textContent = '';
    } else if (btn.textContent === '.' && currentNumber.textContent.includes('.')) {
        return
    } else {
        currentNumber.textContent += btn.textContent;
    }
}