const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
test("should return numeric value corresponding for Number Cards (5♥)", () => {
    const fiveofHearts = getCardValue("5♥");
    expect(fiveofHearts).toEqual(5); 
})

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for Face Cards (J♥)", () => {
    const jOfHearts = getCardValue("J♥");
    expect(jOfHearts).toEqual(10); 
})

// Case 4: Handle Ace (A):
test("should return 11 for Ace (A♥)", () => {
    const aceofHearts = getCardValue("A♥");
    expect(aceofHearts).toEqual(11); 
})

// Case 5: Handle Invalid Cards:
test("should return invalid for invalid cards (20♥)", () => {
    const invalidCase = getCardValue("20♥");
    expect(invalidCase).toEqual("Invalid card rank."); 
})