let display =  document.querySelector("#display");
let num1 = "";
let num2 = "";
let operator = "";
let reset = false; // determines if next input should clear screen

function calculate(a, b, operator) {
    a = Number(a);
    b = Number(b);
    switch(operator) {
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
            return Math.round(a/b*1000)/1000;
            break;
    }
}

function clear() {
    num1 = "";
    num2 = "";
    operator = "";
}

let clearBut = document.querySelector(".clear");
clearBut.addEventListener("click", () => {
    display.textContent = "";
    clear();
});

let numbers = document.querySelectorAll(".number");
for (let i = 0; i < numbers.length; i++)  {
    numbers[i].addEventListener("click", (event) => {
        if (reset) {
            // clear screen first

            display.textContent = event.target.textContent;
            reset = false;
        }
        else {
            display.textContent += event.target.textContent;
        }
    })
}

let operators = document.querySelectorAll(".operator");
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", (event) => {
        // check if operator is alread set

        if (operator != "") {
            operator = event.target.textContent;
            return;
        }


        if (num1 == "") {
            num1 = display.textContent;
            display.textContent = "";
            operator = event.target.textContent;
        } else {
            // perform calculation

            num2 = display.textContent;
            console.log(num1 + operator + num2);
            display.textContent = calculate(num1, num2, operator);

            // set values for next calculation

            num1 = display.textContent;
            operator = event.target.textContent;
            reset = true;
        }
    })
}

let equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
    // check if there is a full expression

    if (num1 != "" & display.textContent != "") {
        // perform calculation;

        num2 = display.textContent;
        display.textContent = calculate(num1, num2, operator);
        clear();
        reset = true;
    }
})