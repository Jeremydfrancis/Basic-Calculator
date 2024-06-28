const defaultResult = 0;
let currentResult = defaultResult;


function add() {
  const calculationDescription = `${currentResult} + ${parseInt(userInput.value)}`;
  currentResult = currentResult + parseInt(userInput.value);
  outputResult(currentResult, calculationDescription);
}

function subtract() {
  const calculationDescription = `${currentResult} - ${parseInt(userInput.value)}`;
  currentResult = currentResult - parseInt(userInput.value);
  outputResult(currentResult, calculationDescription);
}

function multiply() {
  const calculationDescription = `${currentResult} * ${parseInt(userInput.value)}`;
  currentResult = currentResult * parseInt(userInput.value);
  outputResult(currentResult, calculationDescription);
}

function divide() {
  const calculationDescription = `${currentResult} / ${parseInt(userInput.value)}`;
  currentResult = currentResult / parseInt(userInput.value);
  outputResult(currentResult, calculationDescription);
}



function remove () {
  changeText.classList.remove('show');
  changeText.classList.add('hide');
  
}

function reset() {
  currentResult = defaultResult;
  userInput.value = '';
  outputResult('');
  changeText.classList.remove('hide');
  changeText.classList.add('show');
}




addBtn.addEventListener('click', add);
addBtn.addEventListener('click', remove);
subtractBtn.addEventListener('click', subtract);
subtractBtn.addEventListener('click', remove);
multiplyBtn.addEventListener('click', multiply);
multiplyBtn.addEventListener('click', remove);
divideBtn.addEventListener('click', divide);
divideBtn.addEventListener('click', remove);
resetBtn.addEventListener('click', reset);



