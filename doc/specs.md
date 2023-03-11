# Specifications of emoji language

The emoji language is a stack based esolang, which uses emojis as commands. The original language was described on [esolangs.org](https://esolangs.org/wiki/Emoji), and already has an [implementation](https://github.com/vpzomtrrfrt/emoji.py) with Python by vpzomtrrfrt [WIP].

Its description is found as such on the esolangs wiki : 

```
💬: Read until the next 💬 and puts that string onto the stack
⛽: Reads until the next 🚘 and puts that string onto the stack (can be nested, meant for storing functions)
➡: Prints a value from the stack
🚲: Puts True onto the stack
🚳: Puts False onto the stack
🚴: Inverts a boolean value from the stack
👫: Adds two numbers from the stack
👪: Multiplies two numbers from the stack
🌊: Subtracts two numbers from the stack
🍴: Divides two numbers from the stack
💸: Divides two numbers from the stack, returns the remainder
💿: Rounds a number from the stack to the nearest integer
📥: Rounds down a number from the stack
📤: Rounds up a number from the stack
🐂: Converts a number to a hex string
🔢: Converts a string to a number
👬: Checks if two numbers are equal
🐣: Checks if a number is less than another
🐔: Checks if a number is greater than another
🔚: Takes a boolean from the stack.  If false, skips to the next 🐧.
🔙: If the last 🔚 did not skip past stuff, skip to the next 🐧.
🔃: Takes two strings from the stack.  Runs the first, takes a boolean.  If true, runs the second and repeats.
👥: Duplicates a stack entry
🔣: Converts a character to its character code
🔍: Converts a character code to its character
📲: Takes two objects, saves the first to a variable identified by the second
📱: Takes an object, returns the value from the variable by that name
📃: Returns the length of a string or array from the stack
✂: Takes a string and two numbers.  Returns the substring from the string from the first number (inclusive) to the second number (exclusive).
🏃: Evaluates a string
📚: Creates an empty array.
📌: Takes an array and an object.  Adds the object to the end of the array.  Does not return anything, you'll want to use variables with this.
🔑: Takes an array or string and an index.  Returns the value at that index.
🔀: Swaps two elements on the stack.
🔊: Capitalize a string.
🔉: Change a string to lowercase.
```

As this description is quite sparse, I will further describe some of the commands to deambiguize them.

****

The stack can contain numbers as `float`, strings or indexed arrays.

All binary arithmetic operations `f(a, b)`:
- can also be used for strings, as long as they make sense for it (addition and multiplication);
- take an element `a` from the stack, then an other element `b` and compute `f(b, a)` to put it on the stack. Find an example in pseudo-code for the addition below:
```
Initial stack state : 
    | 'world!'  | 
    | 'Hello, ' |

Execution : 
    a = pop()       // stack now only contains 'Hello, ', and a is 'world!'
    b = pop()       // stack is now empty, and b is 'Hello, '
    a = b + a       // a is now 'Hello, world!'
    push(a)

Final stack state : 
    | 'Hello, world!' |
``` 

All unary operations proceed by either directly changing the value at top of the stack, or by popping it, applying the operation and pushing it back.

Scissors take `a, b, c` from the stack and computes the substring of `c` from `b` to `a`. The substring operation is zero-based.

Example : 

```
💬Hello💬💬2💬💬4💬✂➡
```

outputs 'll' 

Runner evaluates a string as an emoji program with an initial stack identical to the one of the program, and leaving the program stack with the state it has at the end of evaluation.

End, back and penguins can be treated as if else statements

Loop is a while loop