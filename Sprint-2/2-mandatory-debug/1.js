// Predict and explain first...
//  =============> write your prediction here
// Answer: It will cause an error when running console.log 

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// Answer: because the function return nothing, the line a + b will never work

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sumNew(a, b) {
  return(a + b);
}

console.log(`The sum of 10 and 32 is ${sumNew(10, 32)}`);