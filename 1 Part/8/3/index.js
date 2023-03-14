//1

// Function.__proto__.defer = function(timeout) {
//     setTimeout(this, timeout)
// }
//
// function f() {
//     alert("Hello!");
// }
//
// f.defer(1000); // выведет "Hello!" через 1 секунду

//2

Function.__proto__.defer = function(timeout) {
    return (...args) => {
        setTimeout(() => this(...args), timeout)
    }
}

function f(a, b) {
    alert( a + b );
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.