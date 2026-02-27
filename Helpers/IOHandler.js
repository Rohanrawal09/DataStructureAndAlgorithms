var readline = require('readline');

var getTerminalInput = (questionText, algorithm, callback) => {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question(questionText + ' ', (answer) => {
        // We pass the raw answer to your algorithm
        var result = algorithm(answer.trim());
        
        // Pass both the original answer and the result back to the caller
        callback(answer, result);
        
        rl.close();
    });
};

module.exports = {
    getTerminalInput: getTerminalInput
};