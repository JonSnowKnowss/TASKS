// Q: Create a function that calculates the area of a rectangle, where the height has a default value of 10 if not provided.

// function Area(width, height = 10) {
//     return width * height;
// }

// console.log(Area(6));
// console.log(Area(6, 7));

// arrow function : 
const Area = (width, height = 10) => width * height

console.log(Area(6));
console.log(Area(6, 7));   
