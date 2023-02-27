//4
// console.log("4 Задание")
// for (let i = 2; i <= 10; ++i) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

//5
// let i = 0
// while(i < 3) {
//     alert( `number ${i}!` )
//     i++
// }

//6
// let number
//
// while(number <= 100 && number) {
//     number = prompt("Введите число больше 100")
// }

//7
let n = 10

for (let i = 2; i <= n; ++i) {
    let isPrimeNumber = true
    for (let k = 2; k <= Math.sqrt(i); ++k) {
        if (parseInt(i / k) * k === i) {
            isPrimeNumber = false
            break
        }
    }

    if (isPrimeNumber) {
        console.log(i)
    }
}

