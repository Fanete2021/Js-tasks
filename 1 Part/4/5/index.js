//2

// let obj = {};
//
// function A() {
//     return obj
// }
//
// function B() {
//     return obj
// }
//
// let a = new A();
// let b = new B();
//
// alert( a == b ); // true

//2

// function Calculator() {
//     this.read = function () {
//         this['value1'] = +prompt("value1")
//         this['value2'] = +prompt("value2")
//     }
//
//     this.sum = function() {
//         return this['value1'] + this['value2']
//     }
//
//     this.mul = function() {
//         return this['value1'] * this['value2']
//     }
// }
//
// let calculator = new Calculator();
// calculator.read();
//
// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

//3

function Accumulator(startingValue) {
    this.value = startingValue

    this.read = function() {
        this.value += +prompt("Введите значение")
    }
}

let accumulator = new Accumulator(1); // начальное значение 2

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений