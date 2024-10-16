"use strict";
let calculo = "";
let display = document.getElementById("display");
const button = document.querySelectorAll('.numero, .op, .resultado');
button.forEach(button => {
    button.addEventListener('click', () => {
        const buttonId = button.id;
        if (button.id == "clear") {
            calculo = "";
        }
        else if (button.id == "delete") {
            let string = calculo.toString();
            calculo = string.substring(0, string.length - 1);
        }
        else if (calculo != "" && button.id == "equal") {
            try {
                calculo = eval(calculo);
            }
            catch (error) {
                calculo = "error";
            }
        }
        else if (calculo == "0" || calculo == "error") {
            calculo = buttonId;
        }
        else if (calculo == "" && button.id == "equal") {
            calculo = "Null";
            setTimeout(() => (calculo = ""), 10);
        }
        else {
            calculo += button.id;
        }
        display.innerText = calculo;
    });
});
