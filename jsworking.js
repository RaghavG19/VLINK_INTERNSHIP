// In JavaScript, when an execution context is created, it consists of two main components: the memory component and the code component. These components play crucial roles in the execution of the code.

// ### Memory Component (Variable Environment)

// The memory component, also known as the Variable Environment, is where variables and function declarations are stored. It consists of:

// 1. **Variable Object (VO)**:
//    - Stores function arguments, variable declarations (`var`), and function declarations.
//    - In the case of block-scoped variables (`let` and `const`), these are stored in a separate environment record.

// 2. **Lexical Environment**:
//    - Holds the variable environment and the scope chain.
//    - The scope chain is a list of objects that determines the accessibility of variables and functions.

// 3. **Environment Record**:
//    - This is a part of the lexical environment that stores the variables defined within a scope.
//    - It includes a declarative environment record for functions and block-scoped variables and an object environment record for global variables.

// ### Code Component (Thread of Execution)

// The code component is responsible for the actual execution of the code. It involves:

// 1. **Call Stack**:
//    - A stack data structure that tracks function invocations.
//    - When a function is called, it is pushed onto the call stack. When it returns, it is popped off the stack.

// 2. **Execution Context**:
//    - The context in which the code is executed, including the scope chain, the value of `this`, and the reference to the variable environment.
//    - Every time a function is called, a new execution context is created and pushed onto the call stack.

// ### Detailed Example

// Consider the following code:

// ```javascript
var a = 10;

function foo(b) {
  var c = 20;
  return a + b + c;
}

var result = foo(30);
console.log(result);


// #### Memory Component

// 1. **Global Execution Context Creation**:
//    - **Global Variable Object**:
//      - `a: undefined`
//      - `foo: function reference`
//      - `result: undefined`
//    - **Lexical Environment**:
//      - Scope chain: `[Global Environment]`
//      - `this`: `window` (in browsers)

// 2. **Function Execution Context for `foo`**:
//    - **Variable Object**:
//      - `b: 30`
//      - `c: undefined`
//    - **Lexical Environment**:
//      - Scope chain: `[Local Environment, Global Environment]`
//      - `this`: `undefined` (in strict mode) or `window` (in non-strict mode)

// #### Code Component

// 1. **Global Execution Context**:
//    - The global execution context is created and pushed onto the call stack.
//    - Memory allocation phase (hoisting):
//      - `a` is declared and initialized to `undefined`.
//      - `foo` is declared and initialized to the function definition.
//      - `result` is declared and initialized to `undefined`.

// 2. **Execution Phase**:
//    - `a` is assigned the value `10`.
//    - The function `foo` is called with the argument `30`.

// 3. **Function Execution Context (`foo`)**:
//    - The function execution context is created and pushed onto the call stack.
//    - Memory allocation phase (hoisting):
//      - `b` is declared and initialized to `30`.
//      - `c` is declared and initialized to `undefined`.

// 4. **Execution Phase**:
//    - `c` is assigned the value `20`.
//    - The expression `a + b + c` is evaluated to `10 + 30 + 20`, resulting in `60`.
//    - The function returns `60` and its execution context is popped off the call stack.

// 5. **Back to Global Execution Context**:
//    - `result` is assigned the value `60`.
//    - `console.log(result)` outputs `60`.

// ### Visual Representation

// **Global Execution Context**:
// ```
// Memory Component (Variable Environment):
// - a: 10
// - foo: function reference
// - result: 60

// Call Stack:
// - Global Execution Context
// ```

// **Function Execution Context (`foo`)**:
// ```
// Memory Component (Variable Environment):
// - b: 30
// - c: 20

// Call Stack:
// - foo Execution Context
// - Global Execution Context
// ```

// In summary, the memory component handles the storage of variables and functions, while the code component manages the execution of code via the call stack. Understanding these components helps in grasping the lifecycle of variables and the flow of execution in JavaScript.