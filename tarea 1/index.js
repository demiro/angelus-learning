function calculate(number1, number2, operation){
    if (operation === 'add') {
        return number1 + number2;
    }
    
    if (operation === 'subtract') {
        return number1 - number2;
    }

    if (operation === 'multiply') {
        return number1 * number2;
    }

    if (operation === 'divide') {
        return number1 / number2;
    }

}

function onSubmit(){
    var number1 = parseInt(document.getElementById("num1").value);
    var number2 = parseInt(document.getElementById("num2").value);
    var operation = document.getElementById("operation").value;

    var resultEl = document.getElementById("result");
    var result = calculate(number1, number2, operation);
    resultEl.textContent = result;


    
}

// function onsumb