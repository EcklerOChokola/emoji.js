const conv = require('./convert');

function init(stack) {
    return `const writeProgram = require('./utils/write_program');\nconst fs = require('fs');\nconst { exec } = require('child_process');\nlet stack = [${stack}];\nlet a, b, c, out, prog;\n`
}

function writeProgram(str, stack) {
    let input = conv.stringToStack(str);
    let program = init(stack);
    while (input.length != 0) {
        console.log(input);
        program += conv.convertChar(input);
    }
    return(program);
}

module.exports = {
    writeProgram
}