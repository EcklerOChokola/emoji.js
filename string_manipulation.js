const stack_man = require('./stack_manipulation');

function uppercaseTop() {
    return stringFunction('toUpperCase()');
}

function lowercaseTop() {
    return stringFunction('toLowerCase()');
}

function lengthOfTop() {
    return stringFunction('length')
}

function stringFunction(str) {
    const instr1 = stack_man.popStack('a');
    const instr2 = `a = a.${str};\n`
    const instr3 = stack_man.pushStack('a');
    return instr1 + instr2 + instr3;
}

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