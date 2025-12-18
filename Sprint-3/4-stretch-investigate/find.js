function find(str, char) {
  let index = 0;

  while (index < str.length) {
    if (str[index] === char) {
      return index;
    }
    index++;
  }
  return -1;
}

console.log(find("code your future", "u"));
console.log(find("code your future", "z"));

// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

// a) How the index variable updates during the call to find
// Answer: Index will increase by 1 every time the while loop restarts

// b) What is the if statement used to check
// Answer: if (str[index] === char) is used to check if the letter at the index point of the string is strictly equal to char

// c) Why is index++ being used?
// Answer: To increase index by 1 every time the loop restarts, until when it reaches the length of the string then it stops (the condition)

// d) What is the condition index < str.length used for?
// Answer: To check if the index reaches its highest value, which means it's the last character. Otherwise, the while loop continues if the condition is not satisfied.
