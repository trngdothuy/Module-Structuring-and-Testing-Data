const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test("should return false for an improper fraction", () => {
  expect(isProperFraction(5, 2)).toEqual(false)
});

// Case 3: Identify Negative Fractions:
test("should return true for a negative fraction", () => {
  expect(isProperFraction(-4, 7)).toEqual(true)
});

// Case 4: Identify Equal Numerator and Denominator:
test("should return false for an equal numerator and denominator fraction", () => {
  expect(isProperFraction(3, 3)).toEqual(false)
});

// Case 5: Deminator = 0:
test("should return 'Dominator should not be 0' when denominator = 0", () => {
  expect(isProperFraction(3, 0)).toEqual("Dominator should not be 0")
})