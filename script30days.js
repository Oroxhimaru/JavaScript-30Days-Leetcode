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


/* Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal". */

function expect(val) {
  return {
      toBe: function(expectedValue) {
          if (val !== expectedValue) {
              throw new Error("Not Equal");
          }
          return true;
      },
      notToBe: function(unexpectedValue) {
          if (val === unexpectedValue) {
              throw new Error("Equal");
          }
          return true;
      }
  };
}

// Example usage
try {
  expect(5).toBe(5); // This will not throw an error
  expect(5).notToBe(10); // This will not throw an error
  expect(5).toBe(10); // This will throw an error "Not Equal"
  expect(5).notToBe(5); // This will throw an error "Equal"
} catch (error) {
  console.error(error.message);
}
