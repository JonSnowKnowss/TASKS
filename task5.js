/* Q: Given the object:
const user = { name: "Alice", age: 30, city: "New York" };
Extract the name and city properties using destructuring. */

// Destructuring: Destructuring is a simple way to extract values from objects or arrays and assign them to variables in just one line of code.

const user = { name: "Alice", age: 30, city: "New York" };

const { name, city } = user;

console.log(name);
console.log(city);


