let result = document.getElementById("result");

function append(value) {
  result.value += value;
}

function clearResult() {
  result.value = "";
}

function backspace() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
    // Split the expression into two operands and the operator
    let operands = result.value.split(/[+\-\/*]/);
    let operator = result.value.match(/[+\-\/*]/);
    
    // Parse the operands as numbers
    let operand1 = parseFloat(operands[0]);
    let operand2 = parseFloat(operands[1]);
    
    // Check for invalid expression or operator
    if (isNaN(operand1) || isNaN(operand2) || !operator) {
      result.value = "Invalid calculation!";
      return;
    }
    
    // Perform the calculation based on the operator
    switch (operator[0]) {
      case "+":
        result.value = operand1 + operand2;
        break;
      case "-":
        result.value = operand1 - operand2;
        break;
      case "*":
        result.value = operand1 * operand2;
        break;
      case "/":
        if (operand2 === 0) {
          result.value = "Infinity";
        } else {
          result.value = operand1 / operand2;
        }
        break;
      default:
        result.value = "Invalid operator!";
    }
  }
  
