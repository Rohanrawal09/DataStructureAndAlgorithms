var io = require('../Helpers/IOHandler');

var palindromeChecker = (stringValue) => {
    if (!stringValue || stringValue.trim().length === 0) {
        return new Error('Given String is Empty :: 😠');
    }

    var cleanString = stringValue.replace(/[\W_]/g, '').toLowerCase();
    var loopCounter = Math.floor(cleanString.length / 2);

    for (var index = 0; index < loopCounter; index++) {
        if (cleanString[index] !== cleanString[cleanString.length - 1 - index]) {
            return false;
        }
    }
    return true;
};

// Use the IOHandler
io.getTerminalInput(
    'Please enter the string you want to check for Palindrome:', 
    palindromeChecker, 
    (original, result) => {
        if (result instanceof Error) {
            console.error(result.message);
        } else {
            console.log(`Original String Value is :: ${original}`);
            console.log(`Palindromed String Value is :: ${result} ❤️ ❤️ ❤️`);
        }
    }
);