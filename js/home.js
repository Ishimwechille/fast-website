function showsearch() {
    const search_pop_div = document.getElementById("search-popup");

    if(search_pop_div.style.display == "none") {
        search_pop_div.style.display = "flex";
    } else {
        search_pop_div.style.display = "none"
    }
};
// alert("hey");
let currentNumber = "";
let previousNumber = "";
let operator = "";

function appendNumber(number) {
  if (number.match(/^\d+(\.\d+)?$/)) { // Validate number input
    currentNumber += number;
    displayCalculation(); // Update display as numbers are entered
  } else {
    // Handle invalid input (optional, e.g., display a warning message)
  }
}

function appendOperator(op) {
  if (currentNumber) { // Ensure a number is entered before the operator
    previousNumber = currentNumber;
    currentNumber = "";
    operator = op;
    displayCalculation(); // Update display with operator
  }
}

function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  document.getElementById("display").value = "";
}

function calculate() {
  if (currentNumber && operator) {
    let result = 0;
    try {
      let a = parseFloat(previousNumber);
      let b = parseFloat(currentNumber);

      switch (operator) {
        case "+":
          result = a + b;
          break;
        case "-":
          result = a - b;
          break;
        case "*":
          result = a * b;
          break;
        case "/":
          if (b === 0) {
            throw new Error("Cannot divide by zero");
          }
          result = a / b;
          break;
        default:
          throw new Error("Unknown operator");
      }

      // document.getElementById("display").value = `${previousNumber} ${operator}`;
      displayCalculation(result)
      // document.getElementById("display").value = `${previousNumber} ${operator} ${currentNumber} = ${result}`;y
    } catch (error) {
      console.error(error);
      document.getElementById("display").value = "Error";
    }
  }
}

function displayCalculation(result = "") {
  const equation = `${previousNumber} ${operator} ${currentNumber}`;
  const displayValue = result ? `${equation} = ${result}` : equation;
  document.getElementById("display").value = displayValue;
}