/*
    DASAR-DASAR PEMOGRAMMAN JAVASCRIPT
    1. Variabel dan Tipe Data
    2. Operator
    3. Array
    4. Object
    5. Fungsi
    6. JavaScript Conditional
    7. JavaScript Loop
*/

// 1. Variabel dan Tipe Data

const namaDepan = "John";
let umur = 20;
umur = 21;
const isMarried = true;

console.log(typeof namaDepan);
console.log(typeof umur);
console.log(typeof isMarried);

console.log("My name is " + namaDepan + " and I am " + umur + " years old. It's " + isMarried + " that I'm married.");

const info = 
"My name is " + namaDepan + " and I am " + umur + " years old. It's " + isMarried + " that I'm married.";

console.log(typeof info);

// 2. Operator

let bilangan = 10;

console.log(bilangan == "10"); //Lose Equality
console.log(bilangan === "10"); //Strict Equality