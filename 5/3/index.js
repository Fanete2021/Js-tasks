//1

// function ucFirst(str) {
//     return str[0].toUpperCase() + str.slice(1)
// }
//
// console.log(ucFirst("вася") == "Вася")

//2

// function checkSpam(str) {
//     str = str.toLowerCase()
//     return str.includes('viagra') || str.includes('xxx')
// }
//
// console.log(checkSpam('buy ViAgRA now'))
// console.log(checkSpam('free xxxxx'))
// console.log(checkSpam("innocent rabbit"))

//3

// function truncate(str, maxLength) {
//     if (str.length > maxLength) {
//         return str.slice(0, maxLength - 1) + "…"
//     }
//
//     return str
// }
//
// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)) //"Вот, что мне хотело…"
//
// console.log(truncate("Всем привет!", 20)) // "Всем привет!"

//4

function extractCurrencyValue(str) {
    return +str.slice(1)
}

alert( extractCurrencyValue('$120') === 120 ); // true