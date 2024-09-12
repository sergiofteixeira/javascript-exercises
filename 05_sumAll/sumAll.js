function sumAll(a, b) {
    let total = 0

    if (Number.isInteger(a) && Number.isInteger(b)) {
        if (a > 0 && b > 0) {
            if (b > a) {
                while (a <= b) {
                    total = total + a
                    a++
                }
                return total
            } else if (a > b) {
                while (b <= a) {
                    total = total + b
                    b++
                }
                return total
            } else {
                return "ERROR"
            }
        } else {
            return "ERROR"
        }
    } else {
        return "ERROR"
    }
}

// Do not edit below this line
module.exports = sumAll;
