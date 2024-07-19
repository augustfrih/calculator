let num1 = "";
let num2 = "";
let operator = "none";

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(a, b, o) {
    if (o == "+") {
        return add(a, b);
    } else if (o == "-") {
        return subtract(a, b);
    } else if (o == "*") {
        return multiply(a, b);
    } else if (o == "/") {
        return divide(a, b);
    }

    return "not a valid operator"
};

let displayValue = "";

let buttons = document.querySelectorAll("button");

let display = document.querySelector("#display");
let operatorChosen = false;

display.innerHTML = displayValue;

buttons.forEach ((button) => {
    button.addEventListener("click", () => {
        if (displayValue == "not a valid operator") {
            displayValue = "";
        }
        if (button.className == "number") {
            displayValue = displayValue + button.id;
            if (operatorChosen == false) {
                num1 = num1 + button.id;
            } else {
                num2 = num2 + button.id;
            }
            console.log(displayValue);
        } else if (button.className == "operator") {
            if (operatorChosen == false) {
                displayValue = displayValue + " " + button.id + " ";
                operator = button.id;
                operatorChosen = true;
            } else {
                displayValue = roundAccurately((operate(parseInt(num1), parseInt(num2), operator)), 2);
                num1 = parseInt(displayValue);
                num2 = 0;
                operator = button.id;
                displayValue = displayValue + " " + operator + " ";
            }
        } else if (button.className == "c") {
            displayValue = "";
            operatorChosen = false;
            num1 = 0;
            num2 = 0;
            operator = "none";
        } else if (button.className == "=") {
            displayValue = roundAccurately((operate(parseInt(num1), parseInt(num2), operator)), 2);
            num1 = displayValue;
            num2 = 0;
            operator = "none";
        }
        display.innerHTML = displayValue;
    });
});

function roundAccurately(num, places) {
    return parseFloat(Math.round(num + 'e' + places) + 'e-' + places);
}