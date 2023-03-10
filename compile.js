const writeProgram = require('./write_program');
const fs = require('fs');

function main() {
    args = process.argv;

    if(args.length > 6 && args.length < 2){
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

function interpret(str) {
    const input = fs.readFileSync(str).toLocaleString();
    const prog = writeProgram.writeProgram(input);
    console.log(prog);
}

function compile(str, out, stack) {
    const input = fs.readFileSync(str).toLocaleString();
    const prog = writeProgram.writeProgram(input, stack);
    fs.writeFileSync(out, prog);
}

function usage() {
    console.error("Error : compile.js usage\n\tUse as : node compile.js source_file [destination_file]\n\tIf destination file is defined, the compilation result will be written to it, else it will be written in console");
}


main();