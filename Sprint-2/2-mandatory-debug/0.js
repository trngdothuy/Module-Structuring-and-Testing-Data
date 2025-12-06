// Predict and explain first...

// =============> write your prediction here
// Answer: I think it will be an error when running the 2nd console.log
function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// Answer: Because the function doesnt return anything.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiplyNew(a, b) {
  return(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiplyNew(10, 32)}`);
