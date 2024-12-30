


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
                let inputValue = parseInt(button.value);

                if(Number.isInteger(inputValue) && number1 == null){
                    number1 = inputValue;
                    populateDisplay(inputValue);
                } else if(Number.isInteger(inputValue) && number1 != null){
                    number2 = inputValue;
                    populateDisplay(inputValue);
                } else if(!Number.isInteger(inputValue) && number1 != null && number2 == null){
                    operator = button.value;
                } else if(!Number.isInteger(inputValue) && number1 != null && number2 != null){
                    console.log(number1,operator,number2);
                    number1 = operate(operator, number1, number2);
                    operator = button.value;
                    populateDisplay(number1);
                }

            });
        });
    }

    function populateDisplay(value) {
        const display = document.querySelector("#display");
        display.textContent = value;
        
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
        let result = 0;
        switch(opr){
            case '+':
                result = add(num1, num2);
                break;

            case '-':
                result = substract(num1, num2);
                break;

            case '*':
                result = multiply(num1, num2);
                break;

            case '/':
                result = divide(num1, num2);
                break;
            default:
                break;
        }
        console.log(result);
        return result;
    }

    renderCalculatorButton();
}

calculator();
