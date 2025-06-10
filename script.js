function calculate(a, b, operator) {
    switch(operater) {
        case "+":
            return a + b;
            break;
        case "-":
            return a - b;
            break;
        case "x":
            return a * b;
            break;
        case "/":
            return a/b;
            break;
    }
}

let display =  document.querySelector("#display");
let number = "";
let operator = "";

let clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    display.textContent = "";
});

let numbers = document.querySelectorAll(".number");
for (let i = 0; i < numbers.length; i++)  {
    numbers[i].addEventListener("click", (event) => {
        display.textContent += event.target.textContent;
        number += event.target.textContent;
    })
}

let operators = document.querySelectorAll(".operator");
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", (event) => {
        display.textContent = "";
        operator = event.target.textContent;
    })
}