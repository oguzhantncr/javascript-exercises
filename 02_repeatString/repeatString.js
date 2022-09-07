const repeatString = function(msg, repeat) {
    let result = msg;

    if (repeat == 0)
    {
        return ''
    }
    else if (repeat < 0)
    {
        return 'ERROR'
    }

    for (let i = 0; i < (repeat - 1); i++)
    {
        result += msg;
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
