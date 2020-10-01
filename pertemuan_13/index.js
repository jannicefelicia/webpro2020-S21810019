//Rest and Spread Operator

// const hitung = (a, b, c, d, e, f, g) => {
//     const angka = [a, b, c, d, e];
//     let total = 0;
//     for(i=0; i<7; i++) {
//         total += angka[i];
//     }
// }

// console.log(hitung(1, 2, 3, 4, 5, 6, 7));

//this way is complicated if you have many parameters

// const hitung = (...angka) => {
//     let total = 0;
//     angka.forEach(el => {
//         total += el;
//     });
//     return total;
// }

// console.log(hitung(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// const hitung = (param1, param 2, ...params) => {
//     console.log(param1);
//     console.log(param2);
//     console.log(params);

//     let total = 0;
//     params.forEach(el => {
//         total += el;
//     });
//     return total;
// }

// console.log(hitung(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//Spread Operator

//1. Duplikasi Array
const angka = [1, 2, 3, 4, 5];
const angka2 = angka;

angka[0] = 10;
console.log(angka2);

// console.log(angka);
// console.log(...angka);

//2. Menggabungkan Array
//nd bsa sisip angka di concat
// const angka1 = [1, 2, 3, 4, 5];
// const angka2 = [6, 7, 8, 9, 10];
// const angka3 = [12, 13];

// const gabung5 = angka1.concat(angka2, angka3);
// console.log(gabung5);

let orang = {
    nama: 'John',
    umur: 30
};

console.log(orang);

orang = {...orang, pekerjaan: 'guru', pendidikan: 'S2'};
console.log(orang);