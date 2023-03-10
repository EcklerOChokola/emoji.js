function popStack(str) {
    return `${str} = stack.pop();\n`
}

function pushStack(obj) {
    return `stack.push(${obj});\n`
}

function swapTopValues() {
    const instr1 = popStack('a');
    const instr2 = popStack('b');
    const instr3 = pushStack('a');
    const instr4 = pushStack('b');
    return instr1 + instr2 + instr3 + instr4;
}

/**
 * Duplicates the top of the stack 
 * @returns instruction
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

duplicateTop();