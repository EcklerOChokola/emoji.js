const stack_man = require('./stack_manipulation');

/**
 * Generates the instructions to push an empty array to the top of the stack
 * @returns the conform instructions
 */
function newArray() {
    return stack_man.pushStack('[]');
}



module.exports = {
    newArray
}