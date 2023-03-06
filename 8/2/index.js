//2

function Obj() {
    this.value = 2
}
// Obj.prototype = {}

let obj = new Obj()
let obj2 = new obj.constructor();
console.log(obj)
console.log(obj2)