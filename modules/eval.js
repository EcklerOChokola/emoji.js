const stack_man = require('./stack_manipulation');

/**
 * Used to evaluate the string on top of the stack as an emoji program
 * @returns the conform instructions
 */
function evaluate() {
    const instr1 = stack_man.popStack('a');
    const instr2 = 
    `if(!fs.existsSync('tmp')) {fs.mkdirSync('tmp')} 
fs.writeFileSync(\`tmp/tmp.em\`, a);
exec(\`node compile.js tmp/tmp.em tmp/tmp.js -s=\${stack.map(elt => "'" + elt + "'")}\`, (error, stdout, stderr) => {
    if (error) {
        console.error(\`error at compile: \${error.message}\`);
        return;
    }
      
    if (stderr) {
        console.error(\`stderr at compile: \${stderr}\`);
        return;
    }
    exec(\`node tmp/tmp.js\`, (error, stdout, stderr) => {
        if (error) {
            console.error(\`error at compile: \${error}\`);
            return;
        }
          
        if (stderr) {
            stack = stderr;
        }

        console.log(stdout)
    });
});
`;
    return instr1 + instr2;
}

module.exports = {
    evaluate
}