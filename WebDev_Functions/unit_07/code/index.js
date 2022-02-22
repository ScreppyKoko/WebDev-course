// 'use strict';
// Function declaration

// if (false) {
//     function f1() {
//         console.log('function 1 if');
//     }
// }
// else {
//     function f1() {
//         console.log('function 1 else');
//     }
// }

// f1();

// function expression

function f2() {
    console.log(f2.name);
    console.log('function f2');
}

// f2();

const f3 = function (a) {
    console.log('function f3 ' + a);
};

const f4 = function () {
    console.log(f4.name);
    console.log('function f3');
};

const f5 = function example() {
    console.log(f5.name);
    console.log(example.name);
    console.log('function example');
}
const f6 = f5;
f5();
// f6();
// example(); ! ошибка
// f4();