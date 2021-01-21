const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInputValue() {
   return parseInt(userInput.value);
}

function doCalculation(operator, resultBefore, resultAfter) {
   const calcDescription = `${resultBefore} ${operator} ${resultAfter}`;
   outputResult(currentResult, calcDescription);
}

function writeToLog(prevResult, operator, enteredNumber, currentResult) {
   const newLog = {
      prevResult: prevResult,
      operator: operator,
      enteredNumber: enteredNumber,
      currentResult: currentResult
   }
   logEntries.push(newLog);
   console.log(logEntries);
}

function calculateResult(calculationType) {
   const enteredNumber = getUserInputValue();
   const initNumber = currentResult;
   if (calculationType === 'add'){
      currentResult = currentResult + enteredNumber;
      doCalculation('+', initNumber, enteredNumber);
      writeToLog(initNumber, 'add', enteredNumber, currentResult);
   } else if (calculationType === 'subtract') {
      currentResult = currentResult - enteredNumber;
      doCalculation('-', initNumber, enteredNumber);
      writeToLog(initNumber, 'subtract', enteredNumber, currentResult);
   } else if (calculationType === 'multiply') {
      currentResult = currentResult * enteredNumber;
      doCalculation('*', initNumber, enteredNumber);
      writeToLog(initNumber, 'multiply', enteredNumber, currentResult);
   } else if (calculationType === 'divide') {
      currentResult = currentResult / enteredNumber;
      doCalculation('/', initNumber, enteredNumber);
      writeToLog(initNumber, 'divide', enteredNumber, currentResult);
   } 
}

function add() {
   calculateResult('add');
}

function subtract() {
   calculateResult('subtract');
}

function multiply() {
   calculateResult('multiply');
}

function divide() {
   calculationType('divide');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);