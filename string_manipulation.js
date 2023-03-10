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

module.exports = {
    uppercaseTop,
    lowercaseTop,
    lengthOfTop
}