const repeatString = function(word, numOfTimes) {
    let newWord = ""
    if (numOfTimes < 0) {
        return "ERROR"
    }
    for (let i = 0; i < numOfTimes; i++) {
        newWord = newWord + word
    }
    return newWord
};

// Do not edit below this line
module.exports = repeatString;
