let firstNumber = '';
let activeOperator = '';
let secondNumber = '';

function numberIsPressed(number){
  firstNumber += number;
  if(number =='.'){
    parseFloat(number);
  }
  console.log(number);
  updateScreen();
}

function operatorIsPressed(operator) {
  activeOperator = operator;
  doMath();
  secondNumber = firstNumber;
  updateScreen();
  firstNumber = '';
}

function equalsIsPressed() {
  doMath();
  updateScreen();
  firstNumber = '';
  secondNumber = '';
}

function clearScreen() {
  document.getElementById('screen').innerHTML = '';
  firstNumber = '';
  secondNumber = '';
}

function updateScreen() {
  document.getElementById('screen').innerHTML = firstNumber;
}

function doMath () {
  if(firstNumber && secondNumber && activeOperator){
    switch(activeOperator){
      case '+':
        firstNumber = parseFloat(secondNumber) + parseFloat(firstNumber);
        break;
        case '-':
        firstNumber =  parseFloat(secondNumber) - parseFloat(firstNumber);
        break; 
        case '*':
        firstNumber = parseFloat(secondNumber) * parseFloat(firstNumber); 
        break;
        case '/':
        firstNumber = parseFloat(secondNumber) / parseFloat(firstNumber);
    }
    firstNumber = firstNumber.toFixed(2);
    updateScreen();
  }
}

