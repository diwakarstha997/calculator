function calculator(){
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
    function operate(operator, num1, num2) {
        switch(operator){
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
                
        }
    }
}
