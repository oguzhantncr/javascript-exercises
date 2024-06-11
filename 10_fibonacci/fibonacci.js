const fibonacci = function(nth) {

    let count
    if (typeof nth !== 'number') {
        count = parseInt(nth)
    } else {
        count = nth
    }

    if (count < 0) return "OOPS";
    if (count == 0) return 0;

    let prev = 1;
    let secondPrev = 0;
    for (let i = 2; i <= count; i++) {
        let current = prev + secondPrev;
        secondPrev = prev;
        prev = current;
    }
    return prev;
};

// Do not edit below this line
module.exports = fibonacci;
