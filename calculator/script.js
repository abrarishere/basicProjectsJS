let firstNumber = document.querySelector('#previous-operand');
let secondNumber = document.querySelector('#current-operand');
let operator = document.querySelector('#operator');
let equalSymbol = document.querySelector('#equal');
let output = document.querySelector('#output');
let button = document.querySelectorAll('.btn');

output.textContent = '';
equalSymbol.style.display = 'none';

button.forEach((btn) => {
    btn.addEventListener('click', () => {
    btnValue = btn.textContent.trim();
    console.log(btnValue);
    if (btnValue === 'C') {
      console.log('C');
      output.textContent = '';
      firstNumber.textContent = '';
      secondNumber.textContent = '';
      operator.textContent = '';
      equalSymbol.style.display = 'none';
    }else if (btnValue === '←'){
        if (operator.textContent === '') {
            firstNumber.textContent = firstNumber.textContent.slice(0, -1);
        }else if (secondNumber.textContent === ''){ 
            operator.textContent = '';
            equalSymbol.style.display = 'none';
        }else {
            secondNumber.textContent = secondNumber.textContent.slice(0, -1);
        }

    }else if (btnValue === '=') { 
        evaluate(firstNumber.textContent, secondNumber.textContent, operator.textContent);

    } else if (btnValue === '+' || btnValue === '-' || btnValue === '*' || btnValue === '/' || btnValue === '⩭') {
        operator.textContent = btnValue;
        equalSymbol.style.display = 'inline';
    }else if (btnValue === 'π'){
        if (operator.textContent === '') {
            firstNumber.textContent += Math.PI;
        } else {
            secondNumber.textContent += Math.PI;
        }
    }else {
        if (operator.textContent === '') {
            firstNumber.textContent += btnValue;
        } else {
            secondNumber.textContent += btnValue;
        }
    }
    
    });
});

function evaluate(firstNumber, secondNumber, operator) {
    let result = 0;
    switch (operator) {
        case '+':
            result = parseFloat(firstNumber) + parseFloat(secondNumber);
            break;
        case '-':
            result = parseFloat(firstNumber) - parseFloat(secondNumber);
            break;
        case '*':
            result = parseFloat(firstNumber) * parseFloat(secondNumber);
            break;
        case '/':
            result = parseFloat(firstNumber) / parseFloat(secondNumber);
            break;
        case '⩭':
            result = parseFloat(firstNumber) % parseFloat(secondNumber);
            break;
    }
    if (result === Infinity) { 
        output.textContent = 'Error';
    } else {
        output.textContent = result;
    }
    firstNumber.textContent = '';
    secondNumber.textContent = '';
    operator.textContent = '';
    equalSymbol.style.display = 'none';
}
