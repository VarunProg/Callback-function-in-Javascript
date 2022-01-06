# Callback-function-in-Javascript
What is callback function in JavaScript?
A function which takes another function as an argument and call that function in itself is known as callback function, in other words when you take a function and pass into another function is known as callback function.
function x(y) {
    console.log("x called");
    y(); // function y called, and now it's upto x when it wants to call function y
}

function y() {
    console.log("y called");
}
x(y); // function x takes function y as an argument so this function y here is callback function 

why callback?
Javascript is synchronous means single threaded language code is executed line by line, callback functions gives the accessibility to do Asynchronous task in synchronous single threaded language.
Callback functions can be synchronous and Asynchronous as well.
some of the examples of synchronous callbacks functions are map, foreach, reduce, filter and Asynchronous callback function example is setTimeout.

