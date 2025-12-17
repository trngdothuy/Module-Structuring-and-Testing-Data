function countChar(stringOfCharacters, findCharacter) {
    if (stringOfCharacters.includes(findCharacter)) {
        return stringOfCharacters.length - stringOfCharacters.replaceAll(findCharacter, "").length
    }
    return 0
}

console.log(countChar("aaaaa", "a"))

module.exports = countChar;