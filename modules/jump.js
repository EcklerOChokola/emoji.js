const stack_man = require('./stack_manipulation');

/**
 * Generates the instructions to skip to the next penguin if the top of the stack is false
 * @returns the conform instructions
 */
function jumpIfFalse() {
    const instr1 = stack_man.popStack('a');
    const instr2 = 'if (a) {\n';
    return instr1 + instr2;
}

/**
 * Generates the instruction for the penguin
 * @returns the conform instructions
 */
function label() {
    return '}\n';
}

/**
 * Generates the instructions to jump if the last jumpIfFalse did not
 * @returns the conform instructions
 */
function ifLastDidNotJump() {
    return 'else {\n';
}

module.exports = {
    jumpIfFalse,
    label,
    ifLastDidNotJump
}