// Task 1
// Напишите функцию t1, которая  возвращает переменную a1;

let a1 = 8;

function t1() {
    return a1;
}

console.log('task_1');
console.log(t1());


// Task 2.

// Изменим задачу 1. Сейчас она только вывозвращает переменную a1. Давайте сделаем так, чтобы функция, была более гибкой.
// Пусть теперь функция t2 возвращает переменную указанную в качестве параметра.

let a2 = 10;

function t2(b) {
    return b;
}

console.log('task_2');
console.log(t2(a2));


// Task 3.
// Напишите функцию t3, которая возвращает максимальное число из трех переданных функции в качестве параметров.

function t3(a, b, c) {
    return Math.max(a, b, c)
}

let a3_1 = 11, a3_2 = 9, a3_3 = 1;

console.log('task_3');
console.log(t3(a3_1, a3_2, a3_3));

// Task 4
// Напишите функцию t4 которая принимает ваш год рождения  и вычисляет и возвращает ваш возраст. Текущий год получайте с помощью Date.

let your_year = '1995';

function t4(year) {
    const todayYear = new Date().getFullYear();
    return todayYear - year;
}

console.log('task_4');
console.log(t4(your_year));


// Task 5
// Напишите функцию t5, которая принимает 2 числа и возвращает случайное целое число от первого до второго принятого параметра. 

function t5(a, b) {
    let random = Math.round(Math.random() * (a - b) + b)
    return random;
}

console.log('task_5');
console.log(t5(10, 20));


// Task 6
// Напишите функцию t6 которая возвращает случайный цвет в формате rgb(x, y, z)(строка).Где x, y, z - случайные числа в диапазоне[0, 255]. 

function t6() {
    return `rgb(${t5(0, 255)}, ${t5(0, 255)}, ${t5(0, 255)})`
}

console.log('task_6');
console.log(t6());


// Task 7
// Напишите функцию t7, которая принимает строку в качестве параметра и возвращает результат с очищенными пробелами в начале и вконце
// строки.Т.е.принимает _hello_(где знак _ символизирует пробел), а возвращает hello.Для удаления пробелов - используйте trim.

function t7(str) {
    return str.trim();
}

console.log('task_7');
console.log(t7('    hi          '));

// Task 8
// Напишите функцию t8, которая принимает число и возвращает true, если число четное, и false если не четное. 

function t8(num) {
    if (num % 2 === 0) return true
    else return false;
}

console.log('task_8');
console.log(t8(556));


// Task 9
// Создайте функцию t9, которая принимает массив и возвращает меньший элемент.

function t9(a) {
    // let min = a[0];
    // for (let i = 0; i < a.length; i++) {
    //     if (a[i] < min) min = a[i];
    // }
    //
    let min = Math.min.apply(null, a);
    return min;
}

console.log('task_9');
console.log(t9([3, 1, 5, 2, 45]));


// Task 10
// Создайте функцию t1, которая принимает массив числа и возвращает сумму элементов массива.

function t10(a) {
    // let sum = 0;
    // for (let item of a) sum += item;
    //
    let sum = a.reduce((accum, item) => accum += item);
    return sum;
}

console.log('task_10');
console.log(t10([3, 4, 5, 2, 45]));