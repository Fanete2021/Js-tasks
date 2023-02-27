//2

// let num1 = +prompt("num1")
// let num2 = +prompt("num2")
//
// console.log(num1 + num2)

//2

// alert( Math.round(6.35 * 10) / 10 )

//3

// readNumber = function() {
//     let number
//
//     while(!isFinite(number)) {
//         number = prompt("Введите число")
//     }
//
//     if (number === 'null') return null
//
//     return number
// }
//
// readNumber()

//5

// random = function(min, max) {
//     return min + Math.random() * (max - min)
// }
//
// alert( random(2, 5) ); // 2.2345623452
// alert( random(2, 5) ); // 3.7894332423
// alert( random(2, 5) ); // 4.3435234525

//6

randomInteger = function(min, max) {
    return Math.floor(min + Math.random() * max)
}

alert( randomInteger(1, 5) ); // 2
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5