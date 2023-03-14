//1

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };
//
// sumSalaries = (obj) => {
//     let result = 0
//
//     for (val of Object.values(obj)) {
//         if (typeof val === 'number') {
//             result += val
//         }
//     }
//
//     return result
// }
//
// console.log( sumSalaries(salaries) ); //

//2

count = function (obj) {
    return Object.keys(obj).length
}

let user = {
    name: 'John',
    age: 30
};

console.log( count(user) ); // 2