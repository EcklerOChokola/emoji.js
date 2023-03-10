const stack_man = require('./stack_manipulation');

function numberToHex() {
    return convert('a.toString(16)');
}

function hexToNumber() {
    return convert('parseInt(a, 16)');
}

function charToCode() {
    return convert('a.charCodeAt(0)');
}

function codeToChar() {
    return convert('String.fromCharCode(a)');
}

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