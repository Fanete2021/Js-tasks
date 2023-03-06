//1

// function makeCounter() {
//     counter.count = 0;
//
//     function counter() {
//         return counter.count++;
//     };
//
//     counter.set = (value) => counter.count = value
//
//
//     counter.decrease = () => counter.count--;
//
//
//     return counter;
// }
//
// let counter = makeCounter();
// console.log( counter() ); // 0
// console.log( counter() ); // 1
// console.log( counter.set(3) ); // 1
// console.log( counter.decrease() ); // 1
// console.log( counter() ); // 1

//2
sum = (a) => {
    let currentSum = a

    function add(b) {
        currentSum += b
        return add
    }

    add.toString = () => currentSum

    return add
}

console.log(sum(1)(2)) // 1 + 2
console.log(sum(1)(2)(3)) // 1 + 2 + 3
console.log(sum(5)(-1)(2))
console.log(sum(6)(-1)(-2)(-3))
console.log(sum(0)(1)(2)(3)(4)(5))
