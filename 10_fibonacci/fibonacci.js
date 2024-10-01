const fibonacci = function (input) {
    if (input < 0) {
        return "OOPS"
    }
    fib = [0, 1]
    for (let index = fib.length; index < 100; index++) {
        fib[index] = fib[index - 2] + fib[index - 1]
    }
    return fib[input]
};
// Do not edit below this line
module.exports = fibonacci;
