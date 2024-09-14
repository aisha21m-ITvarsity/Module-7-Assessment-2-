var newLine = true; //boolean variable - this determines if the next thing the user types should be on a new line
var value1;
var currentOperator;

//event handler for when an digit button is pressed
function digitBtnPressed(button){

    if(newLine) {
        document.getElementById("inputBox").value = button;
        newLine = false;
    } else {
        var currentValue = document.getElementById("inputBox").value;
        document.getElementById("inputBox").value = currentValue + button;
    }

}
//event handler for when the AC button is pressed
function btnACPressed(){
    document.getElementById("inputBox").value = 0;
    newLine = true;
}

//event handler for operator buttons
function operatorBtnPressed(operator){
    currentOperator = operator;
    value1 = parseInt(document.getElementById("inputBox").value);
    newLine = true;
}

//event handler for equals to button
function equalsBtnPressed(){
    var value2 = parseInt(document.getElementById("inputBox").value);
    var finalTotal;

    switch(currentOperator){
        case "+": 
            finalTotal = value1 + value2;
            break;
    }
    document.getElementById("inputBox").value = finalTotal;

    switch(currentOperator){
        case "-": 
            finalTotal = value1 - value2;
            break;
    }
    document.getElementById("inputBox").value = finalTotal;

    switch(currentOperator){
        case "*": 
            finalTotal = value1 * value2;
            break;
    }
    document.getElementById("inputBox").value = finalTotal;

    switch(currentOperator){
        case "/": 
            finalTotal = value1 / value2;
            break;
    }
    document.getElementById("inputBox").value = finalTotal;

    value1 = 0;
    newLine = true;
}

