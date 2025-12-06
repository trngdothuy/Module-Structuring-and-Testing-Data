const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(num)

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// Answer:
// Math.random() -> returns a random number from 0 to below 1, this can show possibility so the result will be from 1 to 100 
// (maximum - minimum + 1) -> demonstrates the number of integers between the maximum and minimum number
// (Math.random() * (maximum - minimum + 1)) -> chooses a random number in the range of minimum and maximum number
// Math.floor() -> round the number down 
// + minimum -> shift the range up to the minimum value 
// num -> returns a random integer in the range of minimum and maximum number
