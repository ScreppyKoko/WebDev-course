// return работает, НО пишем осознанно
'use strict';

function f1(z) {
    z = z * 5;
    return document.querySelector('.test').innerHTML = z;
}

// используем для вычислений оператор 'comma'
function f2(z) {
    return (z *= 5, console.log(z), z);
    // z = z * 5;
    // return (console.log(z), z);
}

function f3(z) {
    z = (z++, z * 3);
    console.log(z);
}

f1(2);
console.log(f1(2))

f2(5);
console.log(f2(5))

f3(3);