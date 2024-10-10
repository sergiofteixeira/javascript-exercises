const getTheTitles = function (array) {
    newArray = []
    for (let index = 0; index < array.length; index++) {
        newArray.push(array[index].title)
    }
    return newArray
};

// Do not edit below this line
module.exports = getTheTitles;
