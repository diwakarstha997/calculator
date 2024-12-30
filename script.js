
const buttonContainer = document.querySelector("#button-container");
const buttonList = [...buttonContainer.querySelectorAll("button")];

function calculator(){
    let number1 =  null;
    let number2 = null;
    let operator = null;
    let operatorFlag = false; // checks if operator is pressed twice



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

    function clearData(){
        number1 =  null;
        number2 = null;
        operator = null;
        populateDisplay(0);
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

    function isEqualOperator(opr){
        return opr == "=";
    }

    function isClearOperator(opr){
        return opr == "clear";
    }

    function equalOperation() {
        if(number1 != null && number2 != null){
            number1 = operate(operator, number1, number2);
            number2 = null;
            populateDisplay(number1);
        }
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
                result = 0;
                break;
        }
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
            handleButtonClick(button);
        });
    }

    function handleButtonClick(button) {
        button.addEventListener("click",() => {
            let operandValue = parseInt(button.value);
            let operatorValue = button.value
            if(Number.isInteger(operandValue)){
                setOperand(operandValue)
                populateDisplay(operandValue);
                operatorFlag = false;
            } else {
                if(isClearOperator(operatorValue)){
                    clearData();
                } else if(isEqualOperator(operatorValue)){
                    equalOperation();
                } else {
                    if(!operatorFlag) equalOperation(); 
                    setOperator(operatorValue);
                    operatorFlag = true;
                }
            }
        });
    }

    renderCalculatorButton();
}

calculator();
