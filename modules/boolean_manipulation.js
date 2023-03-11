const stack_man = require('./stack_manipulation');

/**
 * Used to push a boolean to the stack
 * @param {boolean} bool 
 * @returns the instruction to push a boolean to the stack
 */
function pushBoolean(bool) {
    return stack_man.pushStack(bool);
}

/**
 * Negates the top of the stack
 * @returns the recquired instructions
 */
function negateTop() {
    const instr1 = stack_man.popStack("a");
    const instr2 = "a = !a;\n"
    const instr3 = stack_man.pushStack("a");
    return instr1 + instr2 + instr3;
}

module.exports = {
    pushBoolean,
    negateTop
}