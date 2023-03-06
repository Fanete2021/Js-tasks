//4

// sum = (a) => {
//     return (b) => {
//         return a + b
//     }
// }
//
// console.log(sum(1)(2))
// console.log(sum(5)(-1))

//5

// inBetween = (a, b) => {
//     return x => {
//         return x >= a && x <= b
//     }
// }
//
// inArray = (arr) => {
//     return x => {
//         return arr.includes(x)
//     }
// }
//
// let arr = [1, 2, 3, 4, 5, 6, 7];
//
// console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
//
// console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2

//6

// byField = (field) => {
//     return (a, b) => {
//         return a[field] > b[field]
//             ? 1
//             : -1
//     }
// }
//
// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
// ];
//
// users.sort(byField('name'));
// console.log(users)
// users.sort(byField('age'));
// console.log(users)

//7

function makeArmy() {
    let shooters = [];

    for (let i = 0; i < 10; ++i) {
        let shooter = function() { // функция shooter
            console.log( i ); // должна выводить порядковый номер
        };
        shooters.push(shooter);
    }

    return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
