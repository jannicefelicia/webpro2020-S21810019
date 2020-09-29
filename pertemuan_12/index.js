//Arrow Function (again)

// const calcAge = function(year) {
//     return 2020 - year;
// };

// console.log(calcAge(2000));

//or

// function calcAge(year) {
//     return 2020 - year;
// };

// console.log(calcAge(2000));

//ES6

// const calcAge = (year) => {
//     return 2020 - year;
// }

//No argument
// const calcAge = () => {
//     return 2020 - 2000;
// };
// concole.log(calcAge);
//in ES6 you just replace the word 'function' with the actual arrow function

//no argument with implicit return value (only available in ES6)
// const calcAge = () => 2020 - 2000;
// concole.log(calcAge);

// const years = [1990, 1992, 2001, 2005];
// const calcAge5 = years.map(function(el) {
//     return 2020 - el;
// });

// const calcAge6 = years.map((el) => 2020 - el);

// console.log(calcAge5);
// console.log(calcAge6);

//Default Parameter: an ES6 feature where you input any number as a default in the parameter 
//and it's okay not to assign the parameter when calling a function
// const calcAge = (birthYear, currentYear = 2020) => currentYear - birthYear;
// console.log(2000);