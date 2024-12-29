/*
Q: Given the array:
const numbers = [1, 2, 3, 4, 5];
1. Use map to create a new array where each number is doubled.
2. Use filter to create a new array with only the even numbers.
*/

// map(): is for changing or transforming each element in an array and returning a new array.
// filter(): is for selecting elements that meet a certain condition and returning a new array with those elements.

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);

const evenNumbers = numbers.filter(num => num % 2 == 0);
console.log(evenNumbers);

