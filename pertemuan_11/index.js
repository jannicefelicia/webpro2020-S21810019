//Arrow Function

//old version; ES5
// function greetings() {
//     console.log("hello");
// };

// greetings();

//ES6 - arrow function - makes functions easier to read
//function with parameter
// const addition = (x, y) => {
//     const result = x + y;
//     return result;
// };
// console.log(addition(1, 2));

//function without parameter
const dogType = () => {
    const dog = ["Pug", "Bulldog", "Poodle"];
    return dog[Math.floor(Math.random()*(dog.length))];
}
console.log(dogType());

//Implicit Return Value; ES5
function greeting(name) {
    return `Hi ${name}`;
}

console.log(greeting('Chandler'));

//Implicit Return Value; ES6
const greet = (name) => `Hi ${name}`;
console.log(greet('Monica'));

//for functions without parameters, the syntax arrow function for 
//implicit return value is written without curly brackets and the 
//keyword 'return'