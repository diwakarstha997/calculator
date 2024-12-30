
const buttonContainer = document.querySelector("#button-container");
const buttonList = [...buttonContainer.querySelectorAll("button")];

function calculator(){
    let number1 =  null;
    let number2 = null;
    let operator = null;


    function setOperand(operandValue){
        if(number1 == null){
            number1 = operandValue;
        } else {
            number2 = operandValue;
        }
    }

    function setOperator(operatorValue) {
            operator = operatorValue;
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

    function renderCalculatorButton(){
        const buttonContainerWidth = buttonContainer.getBoundingClientRect().width;
        const buttonSize = buttonContainerWidth / 5;     
        const buttonGap = buttonSize / 12;

        buttonList.forEach((button) => {
            button.style.width = `${buttonSize}px`;
            button.style.height = `${buttonSize}px`;
            button.style.margin = `${buttonGap}px`;
            handleButtonClick();
        });
    }

    function handleButtonClick() {
        button.addEventListener("click",() => {
            let inputValue = parseInt(button.value);

            if(Number.isInteger(inputValue)){
                setOperand(inputValue)
                populateDisplay(inputValue);
            } else {
                if(number1 != null && number2 != null){
                    number1 = operate(operator, number1, number2);
                    populateDisplay(number1);
                }
                setOperator(button.value);
            }
        });
    }

    renderCalculatorButton();
}

calculator();
