function isProperFraction(numerator, denominator) {
    // add your completed function from key-implement here
    if (denominator === 0) {
      return `Dominator should not be 0`
    }
    if (Math.abs(numerator) < denominator) {
      return true
    } else {
      return false
    };
}

module.exports = isProperFraction;