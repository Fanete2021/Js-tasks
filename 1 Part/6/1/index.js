//1

// sumTo = (n) => {
//     // let sum = 0
//     //
//     // for (let k = 1; k <= n; ++k) {
//     //     sum += k
//     // }
//     //
//     // return sum
//
//     // return n > 0
//     //     ? n + sumTo(n - 1)
//     //     : n
//
//     return n * (n + 1) / 2
// }
//
// console.log(sumTo(1))
// console.log(sumTo(2))
// console.log(sumTo(3))
// console.log(sumTo(4))
//
// console.log(sumTo(100))

//2

// factorial = (n) => {
//     return n > 1
//         ? n * factorial(n - 1)
//         : 1
// }
//
// console.log(factorial(5))

//3

// fib = (n) => {
//     // return n <= 1
//     //     ? n
//     //     : fib(n - 1) + fib(n - 2);
//
//     let a = 1;
//     let b = 1;
//     for (let i = 3; i <= n; i++) {
//         let c = a + b;
//         a = b;
//         b = c;
//     }
//     return b;
// }
//
// console.log(fib(3))
// console.log(fib(7))
// console.log(fib(77))

//4

// printList = list => {
//     // let item = list
//     //
//     // while (item) {
//     //     console.log(item.value);
//     //     item = item.next;
//     // }
//
//     for (let [key, value] of Object.entries(list)) {
//         if (value) {
//             if (typeof value === 'object') {
//                 printList(value)
//             } else {
//                 console.log(key + ": " + value)
//             }
//         }
//     }
// }
//
// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };
//
// printList(list)

//5

printList = list => {
    let arr = [];
    let item = list;

    while (item) {
        arr.push(item.value);
        item = item.next;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        console.log( arr[i] );
    }

    // if (list.next) {
    //     printList(list.next)
    // }
    // console.log(list.value);
}

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

printList(list)