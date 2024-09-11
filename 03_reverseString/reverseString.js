function reverseString(word){
   const splitWord = word.split("").reverse()
   finalWord = splitWord.join("")
   return finalWord
}

// Do not edit below this line
module.exports = reverseString;
