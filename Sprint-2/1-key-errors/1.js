// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// Answer: An error happens because decimalNumber is already provided, cannot be declared again

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
// Answer: SyntaxError: Identifier 'decimalNumber' has already been declared -> delete the part of "const" before decimalNumber to avoid declaration again; or we can move this line to be outside of the function. And SyntaxError: Unexpected end of input at the line of console.log(decimalNumber), because decimal value is provided inside the function and cannot be used out of this scope.

// Finally, correct the code to fix the problem
// =============> write your new code here
// Answer: 
function convertToPercentageNew(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

const decimalNumber = 0.5;
console.log(decimalNumber);