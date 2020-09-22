//var, let, const
//we don't use var because var allows its names to be the same, 
//making the programmer unaware that there are potentially variables that have the same name.
//the problem with the same name is the code might be accidentally replaced.
//this doesn't happen if we use 'let'
//the next problem is the scope. two types of scope: function scope and block scope. 
//block scope is better because most programs use it.
//var uses function scope, whereas let and const use block scope.

// for(var i=0; i<10; i++) {
//     console.log(i);
// }

// console.log(i);
//when using var, the variable can be accessed outside of the curly brackets, unless it's used in a function

//there's a technique called IIFE (immediately invoked function expression) 
//that lets programmers use the function right after declaring it. example is below.
// (function test() {
//     for(var i=0; i<10; i++) {
//         console.log(i);
//     }
// })();

//Template Literal
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 33
};

console.log(`Hello, my name is ${person.firstName} ${person.lastName} and I am ${person.age} years old.`)