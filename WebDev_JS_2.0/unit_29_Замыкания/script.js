//! работаем без замыканий. возникает проблема в глобальной области видимости при переопределении значения переменной "а"

let a = 0;
console.log('переменная а = ' + a);

function one() {
    a += 1;
    return a; 
}

console.log(one());
console.log(one());
console.log(one());
a = 111;
console.log(one());
console.log('переменная а = ' + a);


//! работаем с замыканием 

function t1 () {
    let a = 0;
    return () => {
        a += 1;
        return a; 
    }
}

let b = t1();
let с = t1();
console.log('b теперь = ' + b());
console.log('с теперь = ' + с());
console.log('b теперь = ' + b());
console.log('b теперь = ' + b());
console.log('с теперь = ' + с());
console.log('с теперь = ' + с());
console.log('с теперь = ' + с());
console.log('b теперь = ' + b());