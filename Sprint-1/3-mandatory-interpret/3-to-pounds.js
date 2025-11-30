const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

// Answer:
// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1): removes the last trailing "p" from the penceString
// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"): converts the penceString to a format of '###', it means always including 3 digits. If there is only 2 digits, it will be '0##'. If there is 1 digit, it will show '00#' 
// 4. const pounds = paddedPenceNumberString.substring(0,  paddedPenceNumberString.length - 2): removes the 2 last digits
// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"): Takes the last 2 digits, makes sure it will always be 2 digits like '##', if the number is < 10, it will be '0#'
// 6. console.log(`£${pounds}.${pence}`): print the result after converting to pounds, in this format '£#.##'