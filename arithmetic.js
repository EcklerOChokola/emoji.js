const stack_man = require('./stack_manipulation');

function addTop() {
    const instr3 = 'a = b + a;\n';
    return arithmeticBinaryOp(instr3);
}

function mulTop() {
    const instr3 = 'a = b * a;\n';
    return arithmeticBinaryOp(instr3);
}

function subTop() {
    const instr3 = 'a = b - a;\n';
    return arithmeticBinaryOp(instr3);
}

function divTop() {
    const instr3 = 'a = b / a;\n';
    return arithmeticBinaryOp(instr3);
}

function modTop() {
    const instr3 = 'a = b % a;\n';
    return arithmeticBinaryOp(instr3);
}

function roundToNearestIntTop() {
    const instr2 = 'a = Math.round(a);\n';
    return arithmeticUnaryOp(instr2);
}

function roundDownTop() {
    const instr2 = 'a = Math.floor(a);\n';
    return arithmeticUnaryOp(instr2);
}

function roundUpTop() {
    const instr2 = 'a = Math.ceil(a);\n';
    return arithmeticUnaryOp(instr2);
}

function testEqual() {
    const instr3 = 'a = a == b;\n';
    return arithmeticBinaryOp(instr3);
}

function testLess() {
    const instr3 = 'a = b < a;\n';
    return arithmeticBinaryOp(instr3);
}

function testGreater() {
    const instr3 = 'a = b > a;\n';
    return arithmeticBinaryOp(instr3);
}

function arithmeticBinaryOp(instr3) {
    const instr1 = stack_man.popStack('a');
    const instr2 = stack_man.popStack('b');
    const instr4 = stack_man.pushStack('a');
    return instr1 + instr2 + instr3 + instr4;
}

function arithmeticUnaryOp(instr2) {
    const instr1 = stack_man.popStack('a');
    const instr3 = stack_man.pushStack('a');
    return instr1 + instr2 + instr3;
}



module.exports = {
    addTop,
    mulTop,
    subTop,
    divTop,
    modTop,
    roundToNearestIntTop,
    roundDownTop,
    roundUpTop,
    testEqual,
    testLess,
    testGreater
}