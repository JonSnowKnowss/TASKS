/* Q: Use template literals to construct the following sentence:
 "Hello, my name is John, and I am 25 years old." Where name and age are variables. */

// Template Literals: Template literals are a way to create strings in JavaScript using backticks (`) instead of regular quotes (' or ").

let name = "John";
let age = 25;
let sentence = `Hello, my name is ${name}, and I am ${age} years old.`;
console.log(sentence);
