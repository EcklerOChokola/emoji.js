const writeProgram = require('./modules/write_program');
const fs = require('fs');

const program = writeProgram.writeProgram("💬Coucou le monde!💬➡", []);

fs.writeFileSync('./out/out.js', program);