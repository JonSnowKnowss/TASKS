/*
Q: Write code that:
1. Combines two arrays [1, 2, 3] and [4, 5, 6] into one array using the spread operator.
2. Uses the rest operator to collect arguments passed to a function into an array.
Promises
*/

// Spread operator: Used to unpack and combine arrays into one.
// Rest Operator: Used inside a function to gather all function arguments into a single array.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = [...array1, ...array2];
console.log(combinedArray);



function collectArguments(...args) {
    console.log(args);
}
collectArguments(7, 8, 9, 10, 11, 12);

