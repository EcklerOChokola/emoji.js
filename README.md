# emoji.js

An emoji to node.js transpiler, written in node.js. 

Project for the compilation lesson.

## Requirements

To run the project, you only need to have node installed.

## Run

To compile an emoji program, you can simply use the following command :

```
node compile.js your_program.em [folder/destination.js] [-s=stack]
```

Using no destination will simply output the resulting node.js script in the standard output.

Specifying a destination file will write the program in the specified file. However, due to the way the compilation is executed, **the functionning of the program is not expected if the destination is not in a folder just under the root of the project**, as the compiled script imports a module from the `modules` folder. 

*Remark : this might be fixed in the future, but it is unsure*

The `-s` option can only be used when compiling the emoji program to a destination as of today.

## Code samples/examples

A simple **Hello, world!** example is able to be run with a `node main.js`, which outputs the compiled program to `out/out.js`.

Further test samples are available in the `tests` folder, with explanations on their use in comments.

## Further documentation

All documentation can be found in the `doc` folder, as well as on [esolangs.org](https://esolangs.org/wiki/Emoji).