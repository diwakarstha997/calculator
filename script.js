
const buttonContainer = document.querySelector("#button-container");
const buttonList = [...buttonContainer.querySelectorAll("button")];

function renderCalculatorButton(){
    const buttonContainerWidth = buttonContainer.getBoundingClientRect().width;
    const buttonSize = buttonContainerWidth / 5;     
    const buttonGap = buttonSize / 12;

    buttonList.forEach((button) => {
        button.style.width = `${buttonSize}px`;
        button.style.height = `${buttonSize}px`;
        button.style.margin = `${buttonGap}px`;
    });
}

renderCalculatorButton();

function calculator(){
    let number1 =  null;
    let number2 = null;
    let operator = null;
    let equalPressed = false;



    // Basic functionalities of calculator

    // setter functions
    function setFirstOperand(value) {
        number1 = value;
    }

    function setSecondOperand(value) {
        number2 = value;
    }

    function setOperator(value) {
        operator = value;
    }

    function setEqualPressed(booleanValue) {
        equalPressed = booleanValue;
    }

    // getter functions
    function getFirstOperand() {
       return number1;
    }

    function getSecondOperand() {
       return number2;
    }

    function getOperator() {
        return operator;
    }

    // null checks
    function isFirstOperandNull() {
        return number1 == null;
    }

    function isSecondOperandNull() {
        return number2 == null;
    }

    function isOperatorNull() {
        return operator == null;
    }

    // euqal check
    function isEqualPressed() {
        return equalPressed;
    }
    
    function populateDisplay(value) {
        const display = document.querySelector("#display");
        display.textContent = value;
        
    }

    function clearData(){
        setFirstOperand(null);
        setSecondOperand(null);
        setOperator(null);
        populateDisplay(0);
    }

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


    // handles user buton click 
    function handleButtonClick() {
        buttonList.forEach((button) => {
            button.addEventListener("click",() => {
                let userInput = button.value;
                let integerValue = convertToInteger(userInput);

                button.focus();

                if(Number.isInteger(integerValue)){
                    processOperand(integerValue);
                } else {
                    processOperator(userInput);
                }
            });
        });
    }

    function convertToInteger(value){
        return parseInt(value);
    }

    // handles integers input
    function processOperand(value){
        if(isOperatorNull()){
            if(isFirstOperandNull() || isEqualPressed()) {
                setFirstOperand(value);
                setEqualPressed(false);
            } else {
                value = appendLastDigit(getFirstOperand(), value);
                setFirstOperand(value);
            }
        } else {
            if(isSecondOperandNull()){
                setSecondOperand(value);
            } else {
                value = appendLastDigit(getSecondOperand(), value);
                setSecondOperand(value);
            }
        }

        populateDisplay(value);
    }

    function appendLastDigit(number, digit) {
        return number * 10 + digit;
    }

    // handles other input
    function processOperator(value){
        if(isClearOperator(value)){
            clearData();
        } else if(isEqualOperator(value)){
            equalOperation();
        } else { // when operator is + - * /
            processOperation();
            setOperator(value);
        }
    }

    function isEqualOperator(opr){
        return opr == "=";
    }

    function isClearOperator(opr){
        return opr == "clear";
    }

    function isOperationValid(){
        if(!isFirstOperandNull() && !isSecondOperandNull()){
            return true;
        } else {
            return false;
        }
    }

    function equalOperation() {
        processOperation();
        setOperator(null);
        setEqualPressed(true);
    }

    function processOperation(){
        if(isOperationValid()){
            let result = operate(getOperator(),getFirstOperand(),getSecondOperand());
            setFirstOperand(result);
            populateDisplay(result);
            setSecondOperand(null);
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

    handleButtonClick();
}

calculator();