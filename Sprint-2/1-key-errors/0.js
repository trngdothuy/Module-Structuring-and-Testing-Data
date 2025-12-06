// Predict and explain first...
//  =============> write your prediction here
// Answer: I think it will cause an error because str is already a parameter so we can't declare again

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
// Answer: SyntaxError: Identifier 'str' has already been declared => str is already provided so it cannot be declared here


// =============> write your new code here
// Answer:
function capitaliseNew(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
