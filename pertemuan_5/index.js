//1. Array

//Deklarasi Array

// let angka = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(angka);
// let buah = ["Mangga", "Apel", "Jeruk"];
// console.log(buah);

// let arr = ["text", 1, true]; //can be used with different data types
// console.log(arr);

// let myFunc = function () {
//     return "Hello Array";
// };

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

//2. Mengubah isi Array
//mhs[1] = "Donny";
//console.log(mhs);

//3. Menghapus isi Array
//mhs[2] = undefined;
//console.log(mhs);

//4. Menampilkan isi Array
// let mhs = ["John", "Bob", "Jane", "Peter"];

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

//4. push, pop, unshift, shift
// mhs.push("Mayrra");
// mhs.push("Stenly");
// console.log(mhs.join(" - "));
// mhs.pop();
// mhs.pop();
// console.log(mhs.join(" - "));

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

//6. Splice dan Slice
//a. Splice

// let buah = ["Pisang", "Mangga", "Apel", "Jeruk"];
// buah.splice(2, 0, "Melon", "Semangka");
// console.log(buah.join(" - "));

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

//angka.forEach(tampilAngka);

//b. map
// let angka2 = angka.map(function(el) {
//     return el;
// });

// console.log(angka2);

//8. sort
// let angka = [1, 100, 2, 20, 5, 3, 7, 8];
// let mhs = ["John", "Bob", "Erick"];
// mhs.sort();
// console.log(mhs);
// angka.sort(function(a,b) {
//     return a-b;
// });
// console.log(angka);

//9. Filter
// let angka = [1, 100, 2, 20, 5, 3, 7, 8];
// let angka2 = angka.map(function(el) {
//     return el;
// });