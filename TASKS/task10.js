/*
Q: Write code to:
1. Create a Set with unique values from an array [1, 2, 2, 3, 4, 4].
2. Create a Map that stores a fruit name as a key and its color as a value (e.g., apple -> red).
*/

// Set: A Set automatically removes duplicate values, so it can be used to create a collection of unique values from an array.
// Map: A Map stores key-value pairs, where the key can be any value, and the value can be anything related to that key.

const numbers = [1, 2, 2, 3, 4, 4];
const uniqueNumbers = new Set(numbers);
console.log(uniqueNumbers);

const fruitColors = new Map();
fruitColors.set("apple", "red");
fruitColors.set("banana", "yellow");
fruitColors.set("cherry", "red");
console.log(fruitColors);
