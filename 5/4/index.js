//2

// let styles = ['Джаз', 'Блюз']
//
// styles.push('Рок-н-ролл')
// console.log(styles.toString())
//
// styles[Math.floor((styles.length - 1) / 2)] = 'Классика'
// console.log(styles.toString())
//
// console.log(styles.shift())
//
// styles.unshift('Рэп', 'Регги')
// console.log(styles.toString())

//4

// sumInput = function() {
//     let numbers = []
//
//     while (true) {
//
//         let number = prompt("Введите число")
//
//         if (!isFinite(number) || number === "" || number === null) break
//
//         numbers.push(+number)
//     }
//
//     return numbers.reduce((acc, n) => acc += n, 0)
// }
//
// console.log(sumInput())

//5
getMaxSubSum = function(numbers) {
    let maxSum = 0
    let tempSum = 0

    for (let item of numbers) {
        tempSum += item;
        maxSum = Math.max(maxSum, tempSum);

        if (tempSum < 0)
            tempSum = 0;
    }

    return maxSum
}

console.log(getMaxSubSum([-1, 2, 3, -9])) // 5
console.log(getMaxSubSum([2, -1, 2, 3, -9])) // 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11]))// 11
console.log(getMaxSubSum([-2, -1, 1, 2])) // 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])) // 100
console.log(getMaxSubSum([1, 2, 3]))// 6