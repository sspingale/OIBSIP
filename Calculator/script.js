let display = document.getElementById('display');
let expression = '0';

function append(value) {
    expression += value;
    display.value = expression;
}

function clearDisplay() {
    expression = '0';
    display.value = '0';
}

function calculate() {
    try {
        let result = eval(expression);
        display.value = result;
        expression = '0';
    } catch (error) {
        clearDisplay()
    }
}
