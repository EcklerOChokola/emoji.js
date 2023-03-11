const stack_man = require('./stack_manipulation');

/**
 * Tranforms a number to an hex string
 * @returns the conform instructions
 */
function numberToHex() {
    return convert('a.toString(16)');
}

/**
 * Tranforms an hex string to a number
 * @returns the conform instructions
 */
function hexToNumber() {
    return convert('parseInt(a, 16)');
}

/**
 * Tranforms a character to its code
 * @returns the conform instructions
 */
function charToCode() {
    return convert('a.charCodeAt(0)');
}

/**
 * Tranforms a code to its character 
 * @returns the conform instructions
 */
function codeToChar() {
    return convert('String.fromCharCode(a)');
}

/**
 * Generic function to convert the top of the stack to another format
 * @param {string} str the conversion instruction
 * @returns the conform instructions
 */
function convert(str) {
    const instr1 = stack_man.popStack('a');
    const instr2 = `a = ${str};\n`;
    const instr3 = stack_man.pushStack('a');
    return instr1 + instr2 + instr3;
}

module.exports = {
    numberToHex,
    hexToNumber,
    charToCode,
    codeToChar
}