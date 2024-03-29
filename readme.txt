Javascript Basics:

    -> Javascript is a synchronous single threaded language.
    -> Everything in Javascript happens inside execution context.

    Execution Context : 
        -> You can assume like a box containing 2 columns.
        -> First column is Memory component (varaible environment) where all functions and varaible decelerations are stored.
        -> Second column is Code component (Thread of execution) where each JS code lines are executed.
    
    -> Execution Context is created in two phases memory allocation and code execution.
    -> In first phase the whole code is skimmed and for every varaible memory is allocation is done with a special place holder "undefined" and incase of functions the whole function is copied and placed in that memory space.
    -> In second phase the code is executed line by line.

    -> When JS file is run the Global Execution Context is created whenever a function is initiated then a new execution context is created whenever its work is done then it is deleted and the order of execution of Execution Context is maintained by "CallStack".
    -> When the whole code is executed then the Global Execution Context(GEC) is also removed from CallStack.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Hoisting:

    -> It is a phenomena in Javascript where the varaibles and functions can be accessed even before they are initialized i.e before assigning any value.
    -> As creation of execution context takes place in 2 phases so even before a single line is executed the memory is allocated to varaibles and functions so based on where we access these things can result in different answers i.e you will understand with the help of execution context flow.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Window Object:

    -> In JavaScript, the window object represents the global browsing context in a web browser environment, providing access to browser-related functionality and global variables.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Undefined vs not defined vs null:

    -> When a variable is declared in first phase of creation of execution the memory is allocated with a special placeholder called "undefined" so when we try of access a variable that is not initialized then we will see undefined.
    -> When a variable which is not declared is tried to access we get a reference error saying not defined.
    -> When a varaible is declared and we want to initialize the variable with nothing(i.e to say intentionally that it has no value) then we assign null to it.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Scope, Scope Chaining and Lexical Environment:

    -> Scope is like whether we can access a particular variable or function within the current execution context.
    -> Lexical Environment is the combination of the current execution context local scope and its parents Lexical Environment i.e we can access a execution context local memory plus its parents local memory in heirachal way. This includes both the local memory of the current execution context and the chain of outer environments.
    -> The chain of accessing the outer environments is called Scope Chaining.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let, const, blockscope, closures:

    -> let and const are introduced in JavaScript from ES6.
    -> let and const decelerations are not stored in global scope they are stored in seperate space called scripts.
    -> Both let and const can't be redeclared whereas const expects both deceleration and initialization at the same time.
    -> If we try to access both let and const decelerations before initialization they will result in reference error. Since they will be in temporal dead zone i.e time between Hoisting and initialization.
    -> Block is the {} used whenever we want multiple statements to execute where JavaScript expects one statement like if statement.
    -> let and const are blockscoped they have seperate memory space other than global, scripts.
    -> Shadowing is changing the value of var from children block.
    -> Closures are nothing but function along with lexical scope binded together.
    -> Closures are indeed a combination of a function and its lexical environment, which allows the function to maintain access to variables from its enclosing scope even after the enclosing scope has finished execution.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Functions:

    -> Function statement / declaration: function a(){}
    -> Function expression: var b = function (){} 
    -> The main difference between function statement and expression lies in hoisting.
    -> Anonymous function: function without name.
    -> Named function expression: var b = function a(){} but we cannot call function with that function name a out of the scope. 
    -> First-class functions is the ability of functions to that can be assigned to variables, passed as arguments, returned from other functions, and treated like any other data type
    -> Parameters refer to the variables listed as part of the function definition, while arguments are the actual values passed to the function when it is called.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

EventListeners:

    -> Callbacks are functions passed as arguments to other functions and invoked by those functions to control the timing or sequence of operations, particularly in asynchronous or event-driven scenarios.
    -> EventListeners are those functions which will invoke a callback function based on the event.
    -> EventListeners run in background when the event happens they invoke the callback.
    -> The event listeners are like any JavaScript objects, should be garbage collected when they are no longer needed to free up memory. Event listeners can potentially be heavy, especially if they contain closures or maintain references to other objects. Proper cleanup of event listeners is important to avoid memory leaks and optimize performance.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

CallBacks: 
    
    -> It opens the world of asynchronous Javascript.
    -> Suppose if there are two functions addItem() and placeOrder() we want placeOrder() to execute after addItem() is done so to do this we can pass the placeOrder() function as callback to that addItem() function.
    -> When the first function finishes its task, it "calls back" by executing the function you provided, allowing you to continue with the next steps of your program.
    -> So it gives the control of placeOrder() i.e when to execute placeOrder(), to the addItem().
    -> It may be good that provides a order to execute but it has its set of disadvantages i.e CallBack Hell and Inversion of control.

    CallBack Hell: It horizontally scales the code so it becomes unmanintainable.
    
    Inversion of control: The function which is passed as a callback may execute or may not that purely depends on the function to which we passed the callback so we can say the function passed as a callback control is completely is passed to that function.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Promises:
    ->