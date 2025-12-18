function cardValidator (cardNum) {
    // length is not 16 digits => false
    if (cardNum.toString().length != 16) {
        return false
    }
    //  not all of them are numbers => false
    else if(!/^\d+$/.test(cardNum)) {
        return false
    }
    // not have at least two different digits represented (all of the digits are the same) => false
    // new Set(cardNum) to create a set from cardNum with no duplicate value
    else if (new Set(cardNum).size < 2) {
        return false
    }
    // the final digit is not even => false
    else if (cardNum.toString().slice(-1) % 2 != 0) {
        return false
    }
    // the sum of all the digits is not greater than 16 => false
    // cardNum.split("") to change cardNum to an array, then use reduce() to accumulate values
    else if (cardNum.split("").reduce((total, value) => total + Number(value), 0) < 16) {
        return false
    }
    else return true 
}

console.log(cardValidator("6666666666661666")) //true
console.log(cardValidator("9999777788880000")) // true
console.log(cardValidator("a92332119c011112")) // false
console.log(cardValidator("4444444444444444")) // false
console.log(cardValidator("6666666666666661")) // false
console.log(cardValidator("1111111111111110")) // false
