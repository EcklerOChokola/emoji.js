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
            console.error(\`error at compile: \${error.message}\`);
            return;
        }
          
        if (stderr) {
            console.error(\`stderr at compile: \${stderr}\`);
            return;
        }

        prog = stdout;
    });
});
`
    const instr3 = stack_man.pushStack('prog');
    return instr1 + instr2 + instr3;
}

module.exports = {
    evaluate
}