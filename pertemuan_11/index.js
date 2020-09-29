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
// const dogType = () => {
//     const dog = ["Pug", "Bulldog", "Poodle"];
//     return dog[Math.floor(Math.random()*(dog.length))];
// }
// console.log(dogType());

// //Implicit Return Value; ES5
// function greeting(name) {
//     return `Hi ${name}`;
// }

// console.log(greeting('Chandler'));

// //Implicit Return Value; ES6
// const greet = (name) => `Hi ${name}`;
// console.log(greet('Monica'));

//for functions without parameters, the syntax arrow function for 
//implicit return value is written without curly brackets and the 
//keyword 'return'

//Arrow Function Exercise - Converting ES5 code to ES6
//ES5
// function yearUntilRetirement(year, firstName) {
//     var age = 28;
//     var retirement = 65 - age;
//     if (retirement > 0) {
//         console.log(firstName + " will retire in " + retirement + " years.");
//     } else {
//         console.log(firstName + " is already retired.");
//     }
// }

//Answer - ES6
yearUntilRetirement = (year, firstName) => {
    let age = 28;
    let retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} will retire in ${retirement} years.`);
    } else {
        console.log(`${firstName} is already retired.`);
    }
}

yearUntilRetirement(2020, 'Jannice');