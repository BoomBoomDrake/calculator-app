const currentNumber = document.getElementById("currentNumber");
const equationPreview = document.getElementById("equationPreview");
const clrBtn = document.getElementById("clr");
const delBtn = document.getElementById("del");
const equal = document.getElementById("equal");
const point = document.getElementById("point");
const numbers = document.querySelectorAll(".numBtn");
const operators = document.querySelectorAll(".opBtn");
let resetReady = false;


currentNumber.textContent = "0";

clrBtn.addEventListener("click", clear);
delBtn.addEventListener("click", backSpace);
equal.addEventListener("click", () => operate(equal.textContent));
point.addEventListener("click", displayPoint);
numbers.forEach((btn) => btn.addEventListener("click", () => displayCurrent(btn.textContent)));
operators.forEach((btn) => btn.addEventListener("click", () => operate(btn.textContent)))

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

function operate(operator) {
    if (equationPreview.textContent == '') {
        if (resetReady && operator == '=') return

        resetReady = false;
        equationPreview.textContent = `${currentNumber.textContent} ${operator}`
        currentNumber.textContent = '0';
        return
    } else {
        let sign = equationPreview.textContent.slice(-1);
        let a = Number(equationPreview.textContent
                .slice(0, -1)
                .trim());
        let b = Number(currentNumber.textContent);

        if (operator == '=') {
            equationPreview.textContent = '';
            resetReady = true;
            currentNumber.textContent = (sign === '+') ? add(a, b)
            : sign === '-' ? subtract(a, b)
            : sign === 'x' ? multiply(a, b)
            : divide(a, b);
            return
        }

        equationPreview.textContent = (sign === '+') ? `${add(a, b)} ${operator}`
            : sign === '-' ? `${subtract(a, b)} ${operator}`
            : sign === 'x' ? `${multiply(a, b)} ${operator}`
            : `${divide(a, b)} ${operator}`;
        currentNumber.textContent = "0";
    }
}

// Display functions:
function displayCurrent(number) {
    if (resetReady) {
        clear();
        resetReady = false;
    }

    if (currentNumber.textContent == '0'){
        currentNumber.textContent = '';
    }

    currentNumber.textContent += number;
}

function displayPoint() {
    if (currentNumber.textContent == '') {
        currentNumber.textContent = '0';
    }

    if (currentNumber.textContent.includes('.')) return
    currentNumber.textContent += ".";
}

function backSpace() {
    if (currentNumber.textContent.length == 1) {
        currentNumber.textContent = "0";
    } else {
        currentNumber.textContent = currentNumber.textContent
        .toString()
        .slice(0, -1);
    }
}

function clear() {
    equationPreview.textContent = "";
    currentNumber.textContent = "0";
}