//1

// function spy(func) {
//     wrapper.calls = []
//
//     function wrapper(...arg) {
//         wrapper.calls.push(arg)
//         return func(...arg)
//     }
//
//     return wrapper
// }
//
// function work(a, b) {
//     console.log( a + b ); // произвольная функция или метод
// }
//
// work = spy(work);
//
// work(1, 2); // 3
// work(4, 5); // 9
//
// for (let args of work.calls) {
//     console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }

//2

// function delay(func, delay) {
//     return (...arg) => {
//         setTimeout(() => func.apply(this, arg), delay)
//     }
// }
//
// function f(x) {
//     console.log(x);
// }
//
// // создаём обёртки
// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);
//
// f1000("test"); // показывает "test" после 1000 мс
// f1500("test"); // показывает "test" после 1500 мс

//3

// function debounce(func, delay) {
//     let lastCall = 0
//     return (...args) => {
//         if (Date.now() - lastCall >= delay) {
//             func(args)
//             lastCall = Date.now()
//         }
//     }
// }
//
// let f = debounce(alert, 1000);
//
// f(1); // выполняется немедленно
// f(2); // проигнорирован
//
// setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
// setTimeout( () => f(4), 1100); // выполняется
// setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)

//4

function throttle(func, delay) {
    let lastCall = 0
    let lastValue
    let timer

    return (value) => {
        lastValue = value

        if (Date.now() - lastCall >= delay) {
            func.call(this, lastValue)
            lastCall = Date.now()
        } else {
            if (timer) {
                clearTimeout(timer)
            }
            timer = setTimeout(() => func.call(this, lastValue), delay)
        }
    }
}

function f(a) {
    console.log(a)
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано
