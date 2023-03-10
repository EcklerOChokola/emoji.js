const stack_man = require('./stack_manipulation');
const arithmetic = require('./arithmetic');
const boolean_man = require('./boolean_manipulation');
const string_man = require('./string_manipulation');
const conversion = require('./conversion');
const eval = require('./eval');

function convertChar(charstack) {
    const c = charstack.pop();
    switch (c) {
        case '⛽':
            return nestedPumpString(charstack);
        case '➡':
            return outputTop();
        case '✂':
            return getSubstring();
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
        case '📲':
            return createPointer();
        case '📱':
            return accessPointed();
        case '📚':
            return pushNewArray();
        case '📌': 
            return pushToEndOfArray();
        case '🔑':
            return getValueAtIndex();*/
        case ' ':
        case '\t':
        case '\n':
            return "";
        default:
            console.error("unexpected character: ", c);
    }
}

function simpleString(charstack) {
    return stack_man.pushStack(`"${getString(charstack)}"`);
}

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

function nestedPumpString(charstack) {
    return stack_man.pushStack(`"${getNestedString(charstack, 0)}"`);
}

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

function stringToStack(str) {
    return str.split('').reverse();
}

function outputTop() {
    return stack_man.popStack('out') + `console.log(out);\n`;
}

module.exports = {
    convertChar,
    stringToStack
}