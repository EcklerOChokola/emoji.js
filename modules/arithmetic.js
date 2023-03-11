const stack_man = require('./stack_manipulation');

/**
 * Used to add two objects on top of the stack
 * @returns the instructions to add to objects from the stack
 */
function addTop() {
    const instr3 = 'a = b + a;\n';
    return arithmeticBinaryOp(instr3);
}

/**
 * Used to multiply two objects on top of the stack
 * @returns the instructions to multiply to objects from the stack
 */
function mulTop() {
    const instr3 = 'a = b * a;\n';
    return arithmeticBinaryOp(instr3);
}

/**
 * Used to substract two objects on top of the stack
 * @returns the instructions to substract to objects from the stack
 */
function subTop() {
    const instr3 = 'a = b - a;\n';
    return arithmeticBinaryOp(instr3);
}

/**
 * Used to divide two objects on top of the stack
 * @returns the instructions to divide to objects from the stack
 */
function divTop() {
    const instr3 = 'a = b / a;\n';
    return arithmeticBinaryOp(instr3);
}

/**
 * Used to apply a modulus two objects on top of the stack
 * @returns the instructions to apply a modulus to objects from the stack
 */
function modTop() {
    const instr3 = 'a = b % a;\n';
    return arithmeticBinaryOp(instr3);
}

/**
 * Used to round the top of the stack
 * @returns the instructions to round the object on top of the stack
 */
function roundToNearestIntTop() {
    const instr2 = 'a = Math.round(a);\n';
    return arithmeticUnaryOp(instr2);
}

/**
 * Used to round the top down of the stack
 * @returns the instructions to round down the object on top of the stack
 */
function roundDownTop() {
    const instr2 = 'a = Math.floor(a);\n';
    return arithmeticUnaryOp(instr2);
}

/**
 * Used to round up the top of the stack
 * @returns the instructions to round up the object on top of the stack
 */
function roundUpTop() {
    const instr2 = 'a = Math.ceil(a);\n';
    return arithmeticUnaryOp(instr2);
}

/**
 * Used to test the equality of two objects on top of the stack
 * @returns the instructions to test the equality
 */
function testEqual() {
    const instr3 = 'a = a == b;\n';
    return arithmeticBinaryOp(instr3);
}

/**
 * Used to test the strict inferiority of two objects on top of the stack
 * @returns the instructions to test the strict inferiority
 */
function testLess() {
    const instr3 = 'a = b < a;\n';
    return arithmeticBinaryOp(instr3);
}

/**
 * Used to test the strict superiority of two objects on top of the stack
 * @returns the instructions to test the strict superiority
 */
function testGreater() {
    const instr3 = 'a = b > a;\n';
    return arithmeticBinaryOp(instr3);
}

/**
 * A generic function for binary operations
 * @param {string} instr3 an instruction line
 * @returns the conform instructions
 */
function arithmeticBinaryOp(instr3) {
    const instr1 = stack_man.popStack('a');
    const instr2 = stack_man.popStack('b');
    const instr4 = stack_man.pushStack('a');
    return instr1 + instr2 + instr3 + instr4;
}

/**
 * A generic function for unary operations
 * @param {string} instr2 an instruction line
 * @returns the conform instructions
 */
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