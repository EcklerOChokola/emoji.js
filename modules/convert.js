const stack_man = require('./stack_manipulation');
const arithmetic = require('./arithmetic');
const boolean_man = require('./boolean_manipulation');
const string_man = require('./string_manipulation');
const conversion = require('./conversion');
const eval = require('./eval');
const array_man = require('./array_manipulation');
const pointer_man = require('./pointer_manipulation');

/**
 * Converts a character to a set of instructions, depending of what the character corresponds to
 * @param {string[]} charstack the stack of characters
 * @returns the deduced instruction
 */
function convertChar(charstack) {
    const c = charstack.pop();
    switch (c) {
        case '⛽':
            return nestedPumpString(charstack);
        case '➡':
            return outputTop();
        case '✂':
            return string_man.getSubstring();
        case '\ud83c':
            const c21 = charstack.pop();
            if (c21 == '\udfc3') {
                return eval.evaluate();
            } else {
                console.error("unexpected character: ", c + c21);
            }
            break;
        case '\ud83d':
            const c2 = charstack.pop();
            switch (c2) {
                case '\udcac':
                    return simpleString(charstack);
                case '\udd00':
                    return stack_man.swapTopValues();
                case '\udc6b':
                    return arithmetic.addTop();
                case '\udc6a':
                    return arithmetic.mulTop();
                case '\udf0a':
                    return arithmetic.subTop();
                case '\udf74':
                    return arithmetic.divTop();
                case '\udcb8':
                    return arithmetic.modTop();
                case '\udeb2':
                    return boolean_man.pushBoolean(true);
                case '\udeb3':
                    return boolean_man.pushBoolean(false); 
                case '\udeb4':
                    return boolean_man.negateTop();
                case '\udd0a':
                    return string_man.uppercaseTop();
                case '\udd09':
                    return string_man.lowercaseTop();
                case '\udcc3':
                    return string_man.lengthOfTop();
                case '\udc65':
                    return stack_man.duplicateTop();
                case '\udc02':
                    return conversion.numberToHex();
                case '\udd22':
                    return conversion.hexToNumber();
                case '\udd23':
                    return conversion.charToCode();
                case '\udd0d':
                    return conversion.codeToChar();
                case '\udcbf':
                    return arithmetic.roundToNearestIntTop();
                case '\udce5':
                    return arithmetic.roundDownTop();
                case '\udce4':
                    return arithmetic.roundUpTop();
                case '\udc6c':
                    return arithmetic.testEqual();
                case '\udc23':
                    return arithmetic.testLess();
                case '\udc14':
                    return arithmetic.testGreater();
                case '\udcda':
                    return array_man.newArray();
                case '\udd11':
                    return array_man.key();
                case '\udcf2':
                    return pointer_man.createPointer();
                default:
                    console.error("unexpected character: ", c + c2);
            }
            /*
        case '🔚':
            return jumpIfFalse(currentLabel() + 1);
        case '🔙':
            return jumpIfLastEndDidNot(currentLabel() + 1);
        case '🐧':
            return createLabel();
        case '🔃':
            return loop();
        case '📱':
            return accessPointed();*/
        case ' ':
        case '\t':
        case '\n':
        default:
            return "";
    }
}

/**
 * Catches all characters to the next speech bubble and pushes it
 * @param {string[]} charstack the input charstack
 * @returns the caught string in a push instruction
 */
function simpleString(charstack) {
    return stack_man.pushStack(`"${getString(charstack)}"`);
}

/**
 * Catched a string until it finds a speech bubble
 * @param {string[]} charstack the input charstack
 * @returns the caught string
 */
function getString(charstack) {
    const c = charstack.pop();
    switch (c) {
        case '\ud83d':
            const c2 = charstack.pop();
            if (c2 == '\udcac') {
                return "";
            } else {
                return c + c2 + getString(charstack);
            }
        default:
            return c + getString(charstack);
    }
}

/**
 * Catches all characters to the next car in a nested manner and pushes it
 * @param {string[]} charstack the input charstack
 * @returns the caught string in a push instruction
 */
function nestedPumpString(charstack) {
    return stack_man.pushStack(`"${getNestedString(charstack, 0)}"`);
}

/**
 * Catched a string until it finds a car in a nested manner
 * @param {string[]} charstack the input charstack
 * @returns the caught string
 */
function getNestedString(charstack, deepness) {
    const c = charstack.pop();
    switch (c) {
        case '⛽':
            return c + getNestedString(charstack, deepness + 1);
        case '\ud83d':
            const c2 = charstack.pop();
            if (deepness == 0 && c2 == '\ude98') {
                return "";
            } else {
                if (c2 == '\ude98') { deepness = deepness - 1; }
                return c + c2 + getNestedString(charstack, deepness);
            }
        default:
            return c + getNestedString(charstack, deepness);
    }
}

/**
 * Converts an emoji program to a character stack to be converted
 * @param {string} str the input program
 * @returns the stack corresponding to the program
 */
function stringToStack(str) {
    return str.split('').reverse();
}

/**
 * Provides the instructions to put the top of the stack in the standard output
 * @returns the conform instructions
 */
function outputTop() {
    return stack_man.popStack('out') + `console.log(out);\n`;
}

module.exports = {
    convertChar,
    stringToStack
}