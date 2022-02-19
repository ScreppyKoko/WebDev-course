function sum(a, b) {
    return a + b;
}

function multi(a, b) {
    return a * b;
}

document.querySelector('.b-1').addEventListener('click', function () {
    let res = sum(23, 45);
    console.log(res);
});

document.querySelector('.b-1').addEventListener('click', () => {
    let res = sum(23, 45);
    console.log(res);
});

// запуск двух функций

document.querySelector('.b-2').addEventListener('click', function () {
    let res = sum(23, 45);
    console.log(res);
    let res2 = multi(23, 45);
    console.log(res2);
});

document.querySelector('.b-2').addEventListener('click', () => {
    let res = sum(23, 45);
    console.log(res);
    let res2 = multi(23, 45);
    console.log(res2);
});

// callback
const ar1 = [4, 5, 6, 7, 8];

function pow2(a) {
    return a ** 2;
}

const res2 = ar1.map(pow2);
console.log(res2);

const res3 = ar1.map(function (a) {
    return a ** 2;
});
console.log(res3);

// стрелочную функцию

const res4 = ar1.map((a) => {
    return a ** 2;
});
console.log(res4);

// сокращенный синтаксис
// одна строка убрать {} return
// один аргумент то убрать ()

const res5 = ar1.map(a => a ** 2);
console.log(res5);

// filter 

const res6 = ar1.filter(function (item, index) {
    if (index % 2 === 0) {
        return true;
    }
});
console.log(res6);

// пишем на стрелочной функции
const res7 = ar1.filter((item, index) => (index % 2 === 0));
console.log(res7);


// arrow & this
document.querySelector('.b-3').addEventListener('click', function () {
    console.log(this);
});
document.querySelector('.b-3').addEventListener('click', () => {
    console.log(this);
});

// arrow аргументы

const f1 = (...arg) => {
    console.log(arg);
    console.log('work');
}

f1(99,100);