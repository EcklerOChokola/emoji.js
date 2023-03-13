const stack_man = require('./stack_manipulation');

/**
 * Generates the instructions to push an empty array to the top of the stack
 * @returns the conform instructions
 */
function newArray() {
    return stack_man.pushStack('[]');
}

/**
 * Generates the instructions to get a value from a key in an array and push the result on top of the stack
 * @returns the conform instructions
 */
function key() {
    const instr1 = stack_man.popStack('b');
    const instr2 = stack_man.popStack('a');
    const instr3 = 'a = a[b];\n';
    const instr4 = stack_man.pushStack('a');
    return instr1 + instr2 + instr3 + instr4; 
}

/**
 * Generates the instructions to push a value from the stack to an array from the stack
 * @returns the conform instructions
 */
function pushPin() {
    const instr1 = stack_man.popStack('b');
    const instr2 = stack_man.popStack('a');
    const instr3 = 'a.push(b);\n';
    return instr1 + instr2 + instr3;
}

module.exports = {
    newArray,
    key,
    pushPin
}