
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// Answer: 3 is not a parameter, and there is no 'num' declared or provided in the function

// function square(3) {
//     return num * num;
// }

// =============> write the error message here
// Answer: SyntaxError: Unexpected number

// =============> explain this error message here
// We cannot have a sole number like this to be a parameter in a function

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}

console.log(square(3))

