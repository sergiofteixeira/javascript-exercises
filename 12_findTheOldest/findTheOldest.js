const findTheOldest = function (array) {
    oldestCounter = 0
    oldest = {}
    for (let index = 0; index < array.length; index++) {
        if (!array[index].hasOwnProperty('yearOfDeath')) {
            array[index].yearOfDeath = new Date().getFullYear()
        }
        currentAge = array[index].yearOfDeath - array[index].yearOfBirth
        if (currentAge > oldestCounter) {
            oldestCounter = currentAge
            oldest = array[index]
        }
    }
    return (oldest)
};
// Do not edit below this line
module.exports = findTheOldest;
