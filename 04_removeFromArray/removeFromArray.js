const removeFromArray = function(array, ...args) {
    
    let filtered = array;

    for (let arg of args)
    {
        filtered = filtered.filter(function(value){return value !== arg});
    }

    return filtered
};

// Do not edit below this line
module.exports = removeFromArray;
