//1. Array

//Deklarasi Array

// let angka = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(angka);
// let buah = ["Mangga", "Apel", "Jeruk"];
// console.log(buah);

// let numbers = [1, 2, 3];
// console.log(numbers);
// let fruits = ['apples', 'oranges', 'grapes'];
// console.log(fruits);
// let random = ['hai', 13, true];
// console.log(random);
// console.log(numbers[2]);
// console.log(fruits[1]);
// console.log(random[0]);

// let arr = ["text", 1, true]; //can be used with different data types
// console.log(arr);

// let myFunc = function () {
//     return "Hello Array";
// };

// function hey() {
//     return console.log('Hello Earth');
// }

// let hello = function() {
//     return console.log('Hello World');
// }

// hey();
// hello();

// let arr2 = ["text", 1, true, myFunc()];
//Mengakses element dalam array
// console.log(arr2[2]);
// console.log(arr2[3]);

//console.log(buah2);

//Manipulasi Array
//1. Menambah isi Array

// let mhs = [];
// mhs[0] = "John";
// mhs[1] = "Bob";
// mhs[2] = "Jane";
// mhs[3] = "Peter";

// console.log(mhs);

// let letters = [];
// letters[0] = 'a';
// letters[1] = 'b';
// letters[2] = 'c';

// console.log(letters);
// letters[1] = 'd';
// console.log(letters);
// letters[2] = undefined;
// console.log(letters);

//2. Mengubah isi Array
//mhs[1] = "Donny";
//console.log(mhs);

//3. Menghapus isi Array
//mhs[2] = undefined;
//console.log(mhs);

//4. Menampilkan isi Array
// let mhs = ["John", "Bob", "Jane", "Peter"];

// for (let i=0; i<3; i++) {
//     console.log(`letters of the alphabet are ${letters}`);
// }

// for (let i=0; i<4; i++) {
//     console.log("Mahasiswa ke-" + (i+1) + " adalah " + mhs);
// }

//Method dalam Array
//1. length
//2. toString
// let mhs = ["John", "Bob", "Jane", "Peter"];
// console.log(mhs.toString());
// //3.join
// console.log(mhs.join(" - "));

// console.log(letters.join(" | "))
// letters.push('e');
// letters.push('f');
// console.log(letters);
// letters.pop();
// letters.pop();
// console.log(letters);

//4. push, pop, unshift, shift
// mhs.push("Mayrra");
// mhs.push("Stenly");
// console.log(mhs.join(" - "));
// mhs.pop();
// mhs.pop();
// console.log(mhs.join(" - "));

// letters.unshift('e');
// letters.unshift('f');
// console.log(letters);
// letters.shift();
// letters.shift();
// console.log(letters);

// mhs.unshift("Stenly");
// mhs.unshift("Mayrra");
// console.log(mhs.join(" - "));
// mhs.shift();
// mhs.shift();
// console.log(mhs.join(" - "));

//5. Concat
// let buah = ["Mangga", "Apel", "Anggur"];
// let sayur = ["Kangkung", "Bayam", "Buncis"];

// let makanan = buah.concat(sayur); //or let makanan = sayur.concat(buah);
// console.log(makanan);

// let ascending = [1, 2, 3];
// let descending = [9, 8, 7];
// let number = ascending.concat(descending);
// console.log(number);

//6. Splice dan Slice
//a. Splice

// let buah = ["Pisang", "Mangga", "Apel", "Jeruk"];
// buah.splice(2, 0, "Melon", "Semangka");
// console.log(buah.join(" - "));

// let fruits = ['apples', 'oranges', 'grapes'];
// fruits.splice(2, 0, "bananas",  "melons");
// console.log(fruits.join(" - "));

// let local = fruits.slice(0, 3);
// let global = fruits.slice(3);
// console.log(local)
// console.log(global)

// //b. Slice
// let buah = buah.slice(0, 2);
// console.log(buah2.join(" - "));

//7. forEach dan map
//a. forEach

// for (let i=0; i<4; i++) {
//     console.log("Mahasiswa ke-" + (i+1) + " adalah " + mhs);
// }

// let angka = [1, 2, 3, 4, 5, 6, 7, 8];

// let tampilAngka = function (el) {
//     console.log(el);
// };
// el = element?

//angka.forEach(tampilAngka);

// let no = [1,2,3,4,5];
// let totalNo = function(el) {
//     console.log(el);
// }
// no.forEach(totalNo);

// let huruf = ['a', 'b', 'c', 'd', 'e'];
// let eachHuruf = function(el) {
//     console.log(el);
// }
// huruf.forEach(eachHuruf);

// //b. map
// let angka2 = angka.map(function(el) {
//     return el;
// });

// console.log(angka2);

// let odd = [1, 3, 5, 7, 9];
// let num = odd.map(function(el) {
//     return el;
// });
// console.log(num);

//8. sort
// let angka = [1, 100, 2, 20, 5, 3, 7, 8];
// let mhs = ["John", "Bob", "Erick"];
// mhs.sort();
// console.log(mhs);
// angka.sort(function(a,b) {
//     return a-b;
// });
// console.log(angka);

let student = ['jannice', 'felicia', 'salindeho'];
student.sort();
console.log(student);
let math = [13, 66, 3, 85, 100];
math.sort();

//9. Filter
let angka = [1, 100, 2, 20, 55, 3, 72, 8];
let angka2 = angka.filter(function(el) {
    return el>50;
});

console.log(angka2);

let no = [3, 45, 11, 74, 74, 13, 50];
let num = no.filter(function(el) {
    return el>10;
});
console.log(num);

let age = [18, 19, 20, 21, 22];
let adult = age.filter(function(el){
    return el>20;
});
console.log(adult);

let grade = [99, 76, 80, 55, 97, 100];
let good = grade.filter(function(el) {
    return el>90;
});
console.log(good);
good.sort();
console.log(good);