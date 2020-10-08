//Destructuring

//Memecah item/property pada array atau object ke dalam variable
//yang berbeda

//1. Array
// const colors = ["merah", "kuning", "hijau"];
// let satu = colors[0];
// let dua = colors[1];
// let tiga = colors[2];

// let[satu, dua, tiga] = colors;

// console.log(satu, dua, tiga);

//2. Object
// const user = {
//     name: "John",
//     gender: "male",
//     age: 33
// };

// let name = user.name;
// let gender = user.gender;
// let age = user.age;

// let {name, gender, age} = user;
// console.log(name, gender, age);

//let {name, gender, age, birthPlace: "Manado"} = user;
//console.log(name, gender, age, birthPlace);

// const display = ({name, age}) => {
//     console.log(`My name is $(name). I am $(age) years old.`);
// };

//3. Array Object
// const users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Jane"},
//     {id: 3, name: "Bob"}
// ];

// let [user1, user2, user3] = users;
// console.log(user1, user2, user3);

// let[, {id, name}, {id, name}] = users;
// console.log(id, name);

//4. Kombinasi dengan Rest Operator
// const colors = ["merah", "kuning", "hijau"];
// let[satu, ...lainnya] = colors;
//console.log(lainnya);