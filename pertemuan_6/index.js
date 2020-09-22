/*
    Object
*/

//const mahasiswa1 = ['John', 'Doe', 31, true];
//key=index

const bio = {
    name: 'John Doe',
    age: 20,
    gender: 'male',
    isMarried: true,
    hobbies: {
        outdoor: 'swimming',
        indoor: 'reading'
    },
    numbers: [1, 2, 3, 4, 5],
    randomCalc: function() {
        let total = 0;
        this.numbers.forEach(function(el) {
            total += el;
        });
        return total;
    }
}

console.log(bio.randomCalc());

const girl = {
    name: 'Tori',
    age: 17,
    address: 'Los Angeles',
    randomNo: [1, 3, 5, 7, 9],
    friends: {
        boy: 'Andre',
        another: 'Cat'
    },
    calculator: function() {
        let totalz = 0;
        this.randomNo.forEach(function(el) {
            totalz += el;
        });
        return totalz;
    }
}

console.log(girl.calculator());

//Mendeklarasikan objek
//1. Object Literals
// const mhs1 = {
//     namaDepan: 'John',
//     namaBelakang: 'Doe',
//     umur: 31,
//     lulus: true,
//     alamat: {
//         jalan: 'Jl. Arnold Mononutu',
//         kecamatan: 'Airmadidi',
//         kabupaten: 'Minahasa Utara'
//     },
//     IPSemester: [3.05, 3.25, 3.0, 3.4],
//     hitungIP: function() {
//         let total = 0;
//         this.IPSemester.forEach(function(el) {
//             total = total + el;
//         });
//         // return total / 4;
//         this.IPKumulatif = total / 4;
//     }
// };

//2. Kata kunci 'new'
// const mhs2 = new Object();
// mhs2.namaDepan = 'John';
// mhs2.namaBelakang = 'Doe';
// mhs2.umur = 31;
// mhs2.lulus = true;

//Mengakses Properti Objek
//1. Dot Notation
// console.log(mhs1.umur);

//2. Bracket Notation
// console.log(mhs1['namaBelakang']);

// console.log(mhs1.alamat);
//accessing an object in an object
// console.log(mhs1.alamat.jalan);
// console.log(mhs1.IPSemester[2]);
// mhs1.hitungIP();
// console.log(mhs1.hitungIP());

//const berlaku pada variabel biasa tetapi tidak berlaku pada objek
//but if you initialize the previous object (yg pke const), you can't

// delete mhs1.namaBelakang;
// console.log(mhs1);

//object is more powerful than array
//below is contoh array object (JSON)
//contoh external JSON: postman and placeholder
const mahasiswa = [
    {
        nim: "001",
        namaDepan: "John",
        namaBelakang: "Doe"
    },
    {
        nim: "002",
        namaDepan: "Jane",
        namaBelakang: "Doe"
    },
    {
        nim: "003",
        namaDepan: "Chandler",
        namaBelakang: "Bing"
    }
];

mahasiswa.forEach(function(el) {
    console.log(el);
});

console.log(mahasiswa);
//when using arrow function (ES6), there will be no used of 'this' keyword