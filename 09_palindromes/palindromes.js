const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

const palindromes = function (word) {
    reverse = word.toLowerCase().split('').filter((letter) => alphabet.includes(letter)).reverse().join('');
    original = word.toLowerCase().split('').filter((letter) => alphabet.includes(letter)).join('');
    return reverse === original;
};

// Do not edit below this line
module.exports = palindromes;
