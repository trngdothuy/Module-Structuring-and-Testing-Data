const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"
test("should return '1st' for 1", () => {
    expect(getOrdinalNumber(1)).toEqual("1st");
    });

// Case 2: Identify the ordinal number for 2
// When the number is 2,
// Then the function should return "2nd"
test("should return '2nd' for 2", () => {
    expect(getOrdinalNumber(2)).toEqual("2nd");
    });

// Case 3: Identify the ordinal number for 3
// When the number is 3,
// Then the function should return "3rd"
test("should return '3rd' for 3", () => {
    expect(getOrdinalNumber(3)).toEqual("3rd");
    });

// Case 4: Identify the ordinal number for 11
// When the number is 11,
// Then the function should return "11th"
test("should return '11th' for 11", () => {
    expect(getOrdinalNumber(11)).toEqual("11th");
    });

// Case 5: Identify the ordinal number for 12
// When the number is 12,
// Then the function should return "12th"
test("should return '12th' for 12", () => {
    expect(getOrdinalNumber(12)).toEqual("12th");
    });

// Case 6: Identify the ordinal number for 13
// When the number is 13,
// Then the function should return "13th"
test("should return '13th' for 13", () => {
    expect(getOrdinalNumber(13)).toEqual("13th");
    });

// Case 7: Identify the ordinal number for 20
// When the number is 20,
// Then the function should return "20th"
test("should return '20th' for 20", () => {
    expect(getOrdinalNumber(20)).toEqual("20th");
    });

// Case 8: Identify the ordinal number for 5
// When the number is 5,
// Then the function should return "5th"
test("should return '5th' for 5", () => {
    expect(getOrdinalNumber(5)).toEqual("5th");
    });

// Case 9: Identify the ordinal number for 21
// When the number is 21,
// Then the function should return "21st"
test("should return '21st' for 21", () => {
    expect(getOrdinalNumber(21)).toEqual("21st");
    });

// Case 10: Identify the ordinal number for 32
// When the number is 32,
// Then the function should return "32nd"
test("should return '32nd' for 32", () => {
    expect(getOrdinalNumber(32)).toEqual("32nd");
    });

// Case 11: Identify the ordinal number for 33
// When the number is 33,
// Then the function should return "33rd"
test("should return '33rd' for 33", () => {
    expect(getOrdinalNumber(33)).toEqual("33rd");
    });

// Case 11: Identify the ordinal number for 16
// When the number is 16,
// Then the function should return "16th"
test("should return '16th' for 16", () => {
    expect(getOrdinalNumber(16)).toEqual("16th");
    });

// Case 11: Identify the ordinal number for 1611
// When the number is 1611,
// Then the function should return "1611th"
test("should return '1611th' for 1611", () => {
    expect(getOrdinalNumber(1611)).toEqual("1611th");
    });

// Case 11: Identify the ordinal number for 1621
// When the number is 1621,
// Then the function should return "1621st"
test("should return '1621st' for 1621", () => {
    expect(getOrdinalNumber(1621)).toEqual("1621st");
    });