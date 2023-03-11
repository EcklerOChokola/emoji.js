const stack_man = require('./stack_manipulation');

/**
 * Uppercases the string at the top of the stack
 * @returns the conform instructions
 */
function uppercaseTop() {
    return stringFunction('toUpperCase()');
}

/**
 * Lowercases the string at the top of the stack
 * @returns the conform instructions
 */
function lowercaseTop() {
    return stringFunction('toLowerCase()');
}

/**
 * Measures the length of the string or array at the top of the stack
 * @returns the conform instructions
 */
function lengthOfTop() {
    return stringFunction('length')
}

/**
 * Generic function used to apply a non-parametric method to a string
 * @param {string} str the name of the applied method
 * @returns the conform instructions
 */
function stringFunction(str) {
    const instr1 = stack_man.popStack('a');
    const instr2 = `a = a.${str};\n`
    const instr3 = stack_man.pushStack('a');
    return instr1 + instr2 + instr3;
}

/**
 * Gets the substring as specified for the Scissors
 * @returns the conform instructions
 */
function getSubstring() {
    const instr1 = stack_man.popStack('c');
    const instr2 = stack_man.popStack('b');
    const instr3 = stack_man.popStack('a');
    const instr4 = 'a = a.substring(b, c);\n';
    return instr1 + instr2 + instr3 + instr4;
}

module.exports = {
    uppercaseTop,
    lowercaseTop,
    lengthOfTop,
    getSubstring
}