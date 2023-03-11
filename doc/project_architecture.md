# Project architecture

The project is separated between different folders:

```
 - doc : all documentation relative to the project;
 - modules : all node.js scripts used to make the project function
 - out : the result of a make command
 - tmp : used by the evaluate command, does not appear on git because its content is very unstable
 - tests : a bunch of emoji programms used as examples/tests
```

At the root of the project is located the `compile.js` script, which is used to ... compile emoji to node.js, and a `main.js` script, that runs a compilation for the 'Hello, world!' program and stores the resulting script in `out/out.js`. 

