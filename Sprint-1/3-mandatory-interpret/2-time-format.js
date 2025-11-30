const movieLength = 1000; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// Answer: 6 variable declarations on Line 1, 3, 4, 6, 7, 9

// b) How many function calls are there?
// Answer: 1, on line 10 console.log()

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// Answer: To know the remainder after dividing the movieLength by 60, or in short, to know the remaining seconds of the movie 

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// Answer: To convert the movie length to minutes, after subtract the remaining seconds

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// Answer: It declares the total time length of the movie in the format: hours:minutes:seconds. We can call it movieTimeLength

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Answer: It can't function well with negative integer (eg: -10), float numbers (eg: 10.1)
