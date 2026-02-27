var io = require('../Helpers/IOHandler');

var maxCharacterChecker = (stringValue) => {
    if (!stringValue || stringValue.trim().length === 0) {
        return new Error('Given String is Empty :: 😠');
    }

    const charCountMap = {};
    let maxCount = 0;
    let maxChar = '';

    for (var index = 0; index < stringValue.length; index++) {
        const char = stringValue[index];
        
        // Increment the count
        charCountMap[char] = (charCountMap[char] || 0) + 1;

        // Update max tracker on the fly
        if (charCountMap[char] > maxCount) {
            maxCount = charCountMap[char];
            maxChar = char;
        }
    }

    return { char: maxChar, count: maxCount };
};

// Use the IOHandler
io.getTerminalInput(
    'Please enter the string you want to check for Max Character:', 
    maxCharacterChecker, 
    (original, result) => {
        if (result instanceof Error) {
            console.error(result.message);
        } else {
            console.log(`Original String Value is :: ${original}`);
            console.log(`Max Character String Value is :: ${JSON.stringify(result)} ❤️ ❤️ ❤️`);
        }
    }
);