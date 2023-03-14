//1

function printNumbers(from, to) {
    let number = from;

    // let timer = setInterval(() => {
    //     console.log(number)
    //     number++
    // }, 1000);
    //
    // setTimeout(() => clearInterval(timer), 1000 * (to - from + 1))

    setTimeout(function timer() {
        console.log(number)
        number++
        if (number <= to) {
            setTimeout(timer, 1000)
        }
    }, 0)
}

printNumbers(1, 10)