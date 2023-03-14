//2

let user = {
    name: "John",
    surname: "Smith"
}

user.name = "Pete"
delete user.name

//2

// let isEmpty = (obj) => {
//     return Object.keys(obj).length === 0
// }
//
// let schedule = {};
//
// alert( isEmpty(schedule) ); // true
//
// schedule["8:30"] = "get up";
//
// alert( isEmpty(schedule) ); // false

//4
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
//
// let sum = Object.values(salaries).reduce((acc, val) => acc += val, 0)
// console.log(sum)

//5
// до вызова функции

let multiplyNumeric = (obj) => {
    for (let [key, value] of Object.entries(obj)) {
        if (typeof value === 'number') {
            obj[key] *= 2
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

console.log(menu)
