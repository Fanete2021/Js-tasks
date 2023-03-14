// 2

// let calculator = {
//     read() {
//         this.value1 = +prompt("Введите 2 значение")
//         this.value2 = +prompt("Введите 2 значение")
//     },
//     sum() {
//         return this['value1'] + this['value2']
//     },
//     mul() {
//         return this['value1'] * this['value2']
//     }
// }
//
// calculator.read();
// console.log(calculator.sum())
// console.log(calculator.mul())

//3

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this
    },
    down() {
        this.step--;
        return this
    },
    showStep: function() { // показывает текущую ступеньку
        alert( this.step );
        return this
    }
};

ladder.up().up().down().showStep().down().showStep();