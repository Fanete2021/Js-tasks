//1

// let user = { name: "John", years: 30 };
//
// let {name, years:age, isAdmin = false} = user
//
// console.log( name ); // John
// console.log( age ); // 30
// console.log( isAdmin ); // false

//2

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

topSalary = (obj) => {

    let maxSalary = 0;
    let name = null;

    for ([key, val] of Object.entries(obj)) {
        if (maxSalary < val) {
            maxSalary = val;
            name = key;
        }
    }

    return name
}

console.log(topSalary(salaries))