/**
 * Pops the top element of the stack
 * @param {string} str the name of the variable to store the popped item in
 * @returns the conform instructions
 */
function popStack(str) {
    return `${str} = stack.pop();\n`
}

/**
 * Pushes an element to the top of the stack
 * @param {string} obj the name of the object to push
 * @returns the conform instructions
 */
function pushStack(obj) {
    return `stack.push(${obj});\n`
}

/**
 * Swaps the two elements at the top of the stack
 * @returns the conform instructions
 */
function swapTopValues() {
    const instr1 = popStack('a');
    const instr2 = popStack('b');
    const instr3 = pushStack('a');
    const instr4 = pushStack('b');
    return instr1 + instr2 + instr3 + instr4;
}

/**
 * Duplicates the top of the stack 
 * @returns the conform instructions
 */
function duplicateTop() {
    const instr1 = popStack('a');
    const instr2 = pushStack('a');
    return instr1 + instr2 + instr2;
}

module.exports = {
    popStack, 
    pushStack,
    swapTopValues,
    duplicateTop
};