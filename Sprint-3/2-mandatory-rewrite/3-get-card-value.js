function getCardValue(card) {
    // replace with your code from key-implement
    const rank = card.substring(0, card.length - 1)
    if (rank === "A") return 11;
    if (rank >= 2 && rank <= 9) return Number(rank);
    if (["10", "J", "Q", "K"].includes(rank)) return 10;
    else return "Invalid card rank."
}
module.exports = getCardValue;