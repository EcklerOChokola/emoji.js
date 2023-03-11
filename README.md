# emoji.js

An emoji to node.js transpiler, written in node.js. 

Project for the compilation lesson.

## Requirements

To run the project, you only need to have node installed.

## Run

To compile an emoji program, you can simply use the following command :

```
node compile.js your_program.em [destination.js] [-s=stack]
```

Using no destination will simply output the resulting node.js script in the standard output.

Specifying a destination file will write the program in the specified file. However, due to the way the compilation is executed, **the functionning of the program is not guaranteed if the destination is not at the root of the project**, as the compiled script imports a module. 

*Remark : this might be fixed in the future, but it is unsure*

The `-s` option can only be used when compiling the emoji program to a destination as of today.

## Further documentation

All documentation can be found in the `doc` folder, as well as on [esolangs.org](https://esolangs.org/wiki/Emoji).