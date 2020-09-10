/*
    1. JavaScript Loop
*/

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

//a. For Loop
// for (let i=1; i<=10; i++) {
//     console.log(i);
// }

//b. For/In Loop
// const buku = {
//     judul: "To All the Boys I've Loved Before",
//     pengarang: "Jenny Han",
//     tahun: 2013
// };
// for (x in buku) {
//     console.log(x, ':', buku[x]);
// }

//c. For/Of Loop
// const buku = ["To All the Boys I've Loved Before",
//     "P.S. I Still Love You",
//     "Always and Forever, Lara Jean"
// ];

// for (x of buku) {
//     console.log(x);
// }

//d. While Loop
// let i = 1;

// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// //e. Do While Loop
// let i = 1;

// do {
//     console.log(i);
//     i++;
// } while (i <= 10);

/*
    2. JavaScript Conditional
*/

//a. If and Else Condition
// let nilai = 95;

// if(nilai > 80) {
//     console.log("Very good");
// } else if(nilai >= 60 && nilai <= 80) {
//     console.log("Good");
// } else {
//     console.log("Try again");
// }

//b. Switch and Case Condition
// let schoolUniform;
// let day = "monday";

// switch(day) {
//     case "monday":
//         schoolUniform = "yellow shirt and plad skirt";
//         break;
//     case "tuesday":
//         schoolUniform = "yellow shirt, black sweater, and plad skirt";
//         break;
//     case "wednesday":
//         schoolUniform = "yellow shirt, plad skirt, and black flats";
//         break;
//     case "thursday":
//         schoolUniform = "batik shirt and plad skirt";
//         break;
//     case "friday":
//         schoolUniform = "free attire";
//         break;
//     default:
//         schoolUniform = "regular school attire";
// }

// console.log(schoolUniform);

//another way that is used when more than one case has the same output

let schoolUniform;
let day = "monday";

switch(day) {
    case "monday":
    case "tuesday":
    case "wednesday":
        schoolUniform = "yellow shirt and plad skirt";
        break;
    case "thursday":
        schoolUniform = "batik shirt and plad skirt";
        break;
    case "friday":
        schoolUniform = "free attire";
        break;
    default:
        schoolUniform = "regular school attire";
}

console.log(schoolUniform);