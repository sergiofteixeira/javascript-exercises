function leapYears(year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 4 === 0 && year % 400 === 0) {
        console.log("leap year")
        return true
    } else {
        console.log("not a leap year")
        return false
    }
}
// Do not edit below this line
module.exports = leapYears;
