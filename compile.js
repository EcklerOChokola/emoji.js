const writeProgram = require('./modules/write_program');
const fs = require('fs');

/**
 * The main function of the script, used to dispatch between the different ways to compile
 */
function main() {
    args = process.argv;

    if(args.length > 5 || args.length < 3){
        usage();
        process.exit(1);
    }

    if(args.length == 3) {
        interpret(args[2]);
    }else if(args.length == 4) {
        compile(args[2], args[3], '[]');
    }else if(args[4].startsWith('-s=')) {
        compile(args[2], args[3], args[4].substring(3));
    }
}

/**
 * Compiles an emoji program and puts the result in the standard output
 * @param {string} str name of the file
 */
function interpret(str) {
    const input = fs.readFileSync(str).toLocaleString();
    const prog = writeProgram.writeProgram(input);
    console.log(prog);
}

/**
 * Compiles an emoji program to a specified file
 * @param {string} str name of the emoji file
 * @param {string} out name of the destination file
 * @param {string} stack optional initial state of the stack, defaulted to []
 */
function compile(str, out, stack) {
    const input = fs.readFileSync(str).toLocaleString();
    const prog = writeProgram.writeProgram(input, stack);
    fs.writeFileSync(out, prog);
}

/**
 * Reminds the user on how to use the script
 */
function usage() {
    console.error("Error : compile.js usage\n\tUse as : node compile.js source_file [destination_file] [-s='stack']\n\tIf destination file is defined, the compilation result will be written to it, else it will be written in console\n\t-s can be used to provide an initial stack state, but can only be used if destination file is provided (for now)");
}

main();