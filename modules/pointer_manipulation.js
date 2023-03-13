const stack_man = require('./stack_manipulation');

/**
 * Generates instructions to set a new pointer/variable from a key and an object in the stack
 * @returns the conform instructions
 */
function createPointer() {
    const instr1 = stack_man.popStack('a');
    const instr2 = stack_man.popStack('b');
    const instr3 = 'data[a] = b;\n';
    return instr1 + instr2 + instr3;
}

/**
 * Generates instructions to get the pointed value / variable from the stack
 * @returns the conform instructions
 */
function accessPointed() {
    const instr1 = stack_man.popStack('a');
    const instr2 = 'a = data[a];\n';
    const instr3 = stack_man.pushStack('a');
    return instr1 + instr2 + instr3;
}

module.exports = {
    createPointer,
    accessPointed
}