function repeat(str, count) {
    if (count < 0) {
        return "Error: Count value can't be negative"
    }
    return str.repeat(count);
}

module.exports = repeat;