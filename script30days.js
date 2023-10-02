/*  Write a function createHelloWorld. It should return a new function that always returns "Hello World" */

function createHelloWorld() {
  return function () {
    return "Hello World";
  };
}

// Usage
const helloWorldFunction = createHelloWorld();
console.log(helloWorldFunction()); // Output: "Hello World"

/* Given an integer n, return a counter function.
 This counter function initially returns n and then returns 1 more than the 
 previous value every subsequent time it is called (n, n + 1, n + 2, etc). */


 function createCounter(n) {
    return function() {
        return n++;
    };
}

// Usage
const counter = createCounter(10); // Initialize the counter with the value 10

console.log(counter()); // Output: 10
console.log(counter()); // Output: 11
console.log(counter()); // Output: 12

