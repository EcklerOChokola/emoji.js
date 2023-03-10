const stack_man = require('./stack_manipulation');

function pushBoolean(bool) {
    return stack_man.pushStack(bool);
}

function negateTop() {
    const instr1 = stack_man.popStack("a");
    const instr2 = "a = !a;\n"
    const instr3 = stack_man.pushStack("a");
}

module.exports = {
    pushBoolean,
    negateTop
}