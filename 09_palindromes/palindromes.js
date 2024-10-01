const palindromes = function (string) {
    splitString = string.split("")
    reverseString = splitString.reverse()
    reverseWord = reverseString.join("")
    if (string === reverseWord) {
        console.log("true")
    } else {
        console.log("false")
    }

};
// Do not edit below this line
module.exports = palindromes;
