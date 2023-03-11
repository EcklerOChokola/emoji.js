const conv = require('./convert');

/**
 * Generates a header for the compiled program
 * @param {string} stack optional initial state of the stack, defaulted to []
 * @returns the header of the program
 */
function init(stack) {
    return `const writeProgram = require('../modules/write_program');\nconst fs = require('fs');\nconst { exec } = require('child_process');\nlet stack = [${stack}];\nlet a, b, c, out, prog;\n`
}

/**
 * Transforms an emoji program to a node.js script
 * @param {string} str the emoji program
 * @param {string} stack optional initial state of the stack
 * @returns the node.js script
 */
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