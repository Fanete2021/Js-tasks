//1

// camelize = function (str) {
//     let arr = str.split('-')
//
//     for (let i = 1; i < arr.length; ++i) {
//         arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
//     }
//
//     return arr.join('')
// }
//
// console.log(camelize("background-color") == 'backgroundColor')
// console.log(camelize("list-style-image") == 'listStyleImage')
// console.log(camelize("-webkit-transition") == 'WebkitTransition')

//2

// filterRange = function (arr, min, max) {
//     return arr
//         .filter(el => el >= min && el <= max)
// }
//
// let arr = [5, 3, 8, 1];
//
// let filtered = filterRange(arr, 1, 4);
//
// console.log( filtered ); // 3,1 (совпадающие значения)
//
// console.log( arr ); // 5,3,8,1 (без изменений)

//3

// filterRangeInPlace = function (arr, min, max) {
//     let filtered = arr.filter(el => el >= min && el <= max)
//     arr.splice(0, arr.length)
//     arr.push(...filtered)
// }
//
// let arr = [5, 3, 8, 1];
//
// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
//
// console.log( arr ); // [3, 1]

//4

// let arr = [5, 2, 1, -10, 8];
//
// arr.sort((a, b) => b - a)
//
// console.log(( arr )); // 8, 5

//5

// copySorted = function(arr) {
//     return [...arr].sort()
// }
//
// let arr = ["HTML", "JavaScript", "CSS"];
//
// let sorted = copySorted(arr);
//
// console.log( sorted ); // CSS, HTML, JavaScript
// console.log( arr ); // HTML, JavaScript, CSS (без изменений)

//6

// function Calculator() {
//     calculator = {
//         '+': (a, b) => a + b,
//         '-': (a, b) => a - b
//     }
//
//     this.calculate = function(str) {
//         let arr = str.split(' ')
//         let a = +arr[0]
//         let operation = arr[1]
//         let b = +arr[2]
//
//         return calculator[operation](a, b)
//     }
//
//     this.addMethod = function(action, fn) {
//         calculator[action] = fn
//     }
// }
//
// let calc = new Calculator();
//
// console.log( calc.calculate("3 + 7") );
//
// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);
//
// let result = powerCalc.calculate("2 ** 3");
// console.log( result ); //

//7

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
//
// let users = [ vasya, petya, masha ];
//
// let names = users.map(e => e.name)
//
// console.log( names ); // Вася, Петя, Маша

//8

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };
//
// let users = [ vasya, petya, masha ];
//
// let usersMapped = users.map(e => {
//     let result = {id: e.id, fullName: e.name + ' ' + e.surname}
//     return result
// })
//
//
// console.log( usersMapped[0].id ) // 1
// console.log( usersMapped[0].fullName ) // Вася Пупкин

//9

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
//
// let arr = [ vasya, petya, masha ];
//
// sortByAge = (arr) => {
//     arr.sort((a, b) => a.age > b.age ? 1 : -1)
// }
//
// sortByAge(arr);
//
// // теперь: [vasya, masha, petya]
// console.log(arr[0].name); // Вася
// console.log(arr[1].name); // Маша
// console.log(arr[2].name); // Петя

//10

// let arr = [1, 2, 3];
//
// shuffle = (arr) => {
//     for (let i = arr.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));
//
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
// }
//
// shuffle(arr);

//11

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };
//
// let arr = [ vasya, petya, masha ];
//
// getAverageAge = (arr) => {
//     let sumAge = arr.reduce((acc, e) => acc += e.age , 0)
//
//     return sumAge / arr.length
// }
//
// console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

//12

// function unique(arr) {
//     // return new Set(arr)
//
//     let result = []
//
//     for (let i = 0; i < arr.length; ++i) {
//         if (!result.includes(arr[i])) {
//             result.push(arr[i])
//         }
//     }
//
//     return result
// }
//
// let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"
// ];
//
// console.log( unique(strings) ); // кришна, харе, :-O

//13

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

groupById = (arr) => {
    return arr.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
}

let usersById = groupById(users);
console.log(usersById)