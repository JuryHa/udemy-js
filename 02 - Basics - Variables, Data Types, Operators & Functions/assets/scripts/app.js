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

function add() {
   const enteredNumber = getUserInputValue();
   const initNumber = currentResult;
   currentResult = currentResult + enteredNumber;
   doCalculation('+', initNumber, enteredNumber);
   writeToLog(initNumber, 'add', enteredNumber, currentResult);
}

function subtract() {
   const enteredNumber = getUserInputValue();
   const initNumber = currentResult;
   currentResult = currentResult - enteredNumber;
   doCalculation('-', initNumber, enteredNumber);
   writeToLog(initNumber, 'subtract', enteredNumber, currentResult);
}

function multiply() {
   const enteredNumber = getUserInputValue();
   const initNumber = currentResult;
   currentResult = currentResult * enteredNumber;
   doCalculation('*', initNumber, enteredNumber);
   writeToLog(initNumber, 'multiply', enteredNumber, currentResult);
}

function divide() {
   const enteredNumber = getUserInputValue();
   const initNumber = currentResult;
   currentResult = currentResult / enteredNumber;
   doCalculation('/', initNumber, enteredNumber);
   writeToLog(initNumber, 'divide', enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);