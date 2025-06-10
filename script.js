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
let num1 = "";
let num2 = "";
let operator = "";

let clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    display.textContent = "";
});

let numbers = document.querySelectorAll(".number");
for (let i = 0; i < numbers.length; i++)  {
    numbers[i].addEventListener("click", (event) => {
        display.textContent += event.target.textContent;
    })
}

let operators = document.querySelectorAll(".operator");
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", (event) => {
        if (num1 == "") {
            num1 = display.textContent;
        } else {
            num2 = display.textContent;
        }
        display.textContent = "";
        operator = event.target.textContent;
    })
}

let equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
    if (num1 != "" & num2 != "") {
        display.textContent = calculate(num1, num2, operator);
    }
})