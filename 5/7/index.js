//1

// function unique(arr) {
//     let unique = new Set(arr)
//
//     return Array.from(unique).toString()
// }
//
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
//
// console.log( unique(values) ); // Hare,Krishna,:-O

//2

// aclean = (arr) => {
//     let map = new Map()
//
//     for (let el of arr) {
//         let word = el
//             .toLowerCase()
//             .split('')
//             .sort()
//             .join('');
//
//         map.set(word, el)
//     }
//
//     return Array.from(map.values());
// }
//
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
//
// console.log( aclean(arr) );

//3

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");