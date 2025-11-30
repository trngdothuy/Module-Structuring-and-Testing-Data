let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// Answer: 2 functions called, line 4 and 5

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// Answer: Line 5: SyntaxError: missing ) after argument list --> missing a ",", add a coma between "," and """

// c) Identify all the lines that are variable reassignment statements
// Answer: Line 4 and 5

// d) Identify all the lines that are variable declarations
// Answer: Line 1, 2, 7, 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// Answer: First, to remove all the coma from the carPrice, then change it to number. In sum, this is to change the type of variable from string to integer