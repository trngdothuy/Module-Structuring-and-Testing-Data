function getOrdinalNumber(num) {
    const lastDigit = num.toString().slice(-1)
    const twoLastDigits = num.toString().slice(-2)
    // console.log(twoLastDigits)
    if (lastDigit == 1 && twoLastDigits != 11) {
        return `${num}st`;
    }
    else if (lastDigit == 2 && twoLastDigits != 12) {
        return `${num}nd`;
    }
    else if (lastDigit == 3 && twoLastDigits != 13) {
        return `${num}rd`;
    } else {
        return `${num}th`
    }
}

module.exports = getOrdinalNumber;