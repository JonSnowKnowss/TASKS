// Q: What's the difference between let and const? Write code that demonstrates their behavior in a block scope.
// let: Used to declare variables that can be reassigned later.
// const: Used to declare constants, i.e., variables that cannot be reassigned after their initial assignment.

if (true) {
    let a = 5;
    const b = 10;

    console.log("inside block:");
    console.log("a:", a); // 5
    console.log("b:", b); // 10

    a = 15;
    // b = 20; 
    console.log("updated a:", a); // 15
}

console.log("outside block:");
// console.log(a);
// console.log(b);
