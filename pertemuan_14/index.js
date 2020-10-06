//Destrukturisasi Array

//ES5
// let buah = ["mangga", "pisang", "anggur"];

// let buah1 = buah[0];
// let buah2 = buah[1];
// let buah3 = buah[2];

// console.log(buah1);
// console.log(buah2);
// console.log(buah3);

//ES6 with destrukturisasi
// let buah = ["mangga", "pisang", "anggur"];

// let [buah1, buah2, buah3] = buah;

// console.log(buah1);
// console.log(buah2);
// console.log(buah3);

//set a blank space inbetween commas
// let[namaDepan, ,namaBelakang, , buku] = ["Joanne", "K", "Rowling", "pengarang", "Harry Potter"];

// console.log(namaDepan);
// console.log(namaBelakang);
// console.log(buku);

//switch values from two variables
//ES5
// let a = 10;
// let b = 15;
// let temp = a;
// a = b;
// b = temp;
// console.log(a, b);

//ES6
// let a = 10;
// let b = 15;
// [a, b] = [b, a];
// console.log(a, b);

//destrukturisasi object
//ES5
// let person = {
//     name: "John",
//     age: 20,
//     isMarried: false
// };

// let name = person.name;
// let age = person.age;
// let isMarried = person.isMarried;

// console.log(name);
// console.log(age);
// console.log(isMarried);

//ES6
// let person = {
//     name: "John",
//     age: 20,
//     isMarried: false
// };

// let { name, age, isMarried } = person;

// console.log(name);
// console.log(age);
// console.log(isMarried);

//change names of the properties
// let person = {
//     name: "John",
//     age: 20,
//     isMarried: false
// };

// let { name: nama, age: umur, isMarried: sudahMenikah } = person;

// console.log(nama);
// console.log(umur);
// console.log(sudahMenikah);

//destrukturisasi object bertingkat
let student = {
    grade: "12C",
    name: ["melany", "angel", "oyen"],
    achievements: {
        sports: "1st place",
        academics: "2nd place"
    }
};

let {
    achievements: {sports}
} = student;

console.log(sports);