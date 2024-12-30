


function calculator(){
    let number1 =  null;
    let number2 = null;
    let operator = null;

    function renderCalculatorButton(){
        const buttonContainer = document.querySelector("#button-container");
        const buttonList = [...buttonContainer.querySelectorAll("button")];
        const buttonContainerWidth = buttonContainer.getBoundingClientRect().width;
        const buttonSize = buttonContainerWidth / 5;
        console.log(buttonContainerWidth/5);
        
        const buttonGap = buttonSize / 12;
        buttonList.forEach((button) => {
            button.style.width = `${buttonSize}px`;
            button.style.height = `${buttonSize}px`;
            button.style.margin = `${buttonGap}px`;
            button.addEventListener("click",() => {
                if(button.value != "=" && button.value != "clear"){
                    populateDisplay(button.value);
                }
            });
        });
    }

    function populateDisplay(value) {
        const display = document.querySelector("#display");
        display.textContent += value;
    }

    // Calculator Functionalities
    function add(num1, num2){
        return num1 + num2;
    }

    function substract(num1, num2){
        return num1 - num2;
    }

    function multiply(num1, num2){
        return num1 * num2;
    }

    function divide(num1, num2) {
        return num1 / num2;
    }

    // Operate Determines which operation to perform based on input
    function operate(opr, num1, num2) {
        switch(opr){
            case '+':
                add(num1, num2);
                break;

            case '-':
                substract(num1, num2);
                break;

            case '*':
                multiply(num1, num2);
                break;

            case '/':
                divide(num1, num2);
                break;
            default:
                break;
        }
    }

    renderCalculatorButton();
}

calculator();
