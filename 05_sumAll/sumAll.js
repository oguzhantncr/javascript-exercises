const sumAll = function(initial, last) {
    let sum = 0

    if (typeof initial !== "number" || initial < 0 ||
        typeof last !== "number" || last < 0)
        {
            return 'ERROR';
        }

    if (initial > last)
    {
        [initial, last] = [last, initial]
    }

    for (let i = initial; i <= last; i++)
    {   
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
