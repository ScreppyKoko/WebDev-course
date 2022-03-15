// Task 1.
// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.
let a = 7;
let b = 9;

console.log(a * b);

// Task 2.
// Создайте две переменные c = 7 и d = 9. Выведите на страницу в .out-2 результат деления c на d.
let c = 7;
let d = 9;

document.querySelector('.out-2').textContent = c / d;

// Task 3.
// Создайте две переменные e = 3 и f = 5. Выведите на страницу  в .out-3 результат сложения e + f.
let e = 7;
let f = 9;

document.querySelector('.out-3').textContent = e + f;

// Task 4.
// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу  в .out-4 результат сложения e1 + f1. Объясните разницу.
let e1 = '3';
let f1 = 5;

// у переменной e1 тип данных - строка, в результате сложения строки с числом будет "35"
let taskFour = document.querySelector('.out-4').textContent = e1 + f1;
console.log(typeof taskFour);
console.log(taskFour);

// Task 5.
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу  в .out-5 результат деления e2 на f2.
let e2 = 3;
let f2 = 0;

// в связи с делением на ноль, результатом будет Infinity (специальное значение в JS)
document.querySelector('.out-5').textContent = e2 / f2;

// Task 6.
// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу  в .out-6 результат сложения двух переменных.
let e3 = 3;
let f3 = 'Hello';

// снова получим склеивание числа со строкой 
document.querySelector('.out-6').textContent = e3 + f3;

// Task 7.
// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу  в .out-7 результат умножения двух переменных.
let e4 = 3;
let f4 = 'Hello';

// получим NaN, т.к. f4 не является числом (если бы было числом, но записано строке, то под копотом js изменил бы тип данных). 
document.querySelector('.out-7').textContent = e4 * f4;

// Task 8.
// По нажатию на кнопку .b-8 выполняется функция, которая выводит в div.out-8 то, что пользователь ввел в input.i-8.

function t8() {
    // value всегда получаем внутри функции
    let data = document.querySelector('.i-8').value; // получили значение
    let output = document.querySelector('.out-8');
    output.textContent = data;     // тут выводим=
}

document.querySelector('.b-8').onclick = t8;

// Task 9.
// По нажатию на кнопку .b-9 выполняется функция t9, которая выводит в div.out-9 то, что пользователь ввел в input.i-9. Добавьте очистку input после нажатия кнопки.

function t9() {
    let input = document.querySelector('input.i-9');
    let output = document.querySelector('div.out-9');
    output.textContent = input.value;
    input.value = '';
}

document.querySelector('.b-9').onclick = t9;

// Task 10.
// По нажатию на кнопку .b-10 выполняется функция t10, которая выводит в div.out-10 то, что пользователь ввел в input.i-10 умноженное на 20.

function t10() {
    let input = document.querySelector('input.i-10');
    let output = document.querySelector('div.out-10');
    output.textContent = +input.value * 20;
    input.value = '';
}

document.querySelector('.b-10').onclick = t10;

// Task 11.
// По нажатию на кнопку .b-11 выполняется функция t11, которая выводит на страницу в .out-11 число, которое ввел пользователь в i-11 и к нему добавленное число 55. В этой задаче мы не приводим к числу полученное из input.

function t11() {
    let input = document.querySelector('input.i-11');
    let output = document.querySelector('div.out-11');
    output.textContent = input.value + 55;
    input.value = '';
}

document.querySelector('.b-11').onclick = t11;

// Task 12.
// По нажатию на кнопку выполняется функция t12. Функция должна получить данные из input i.12-1 и i.12-2 (пользователь вводин в них фамилию и имя). После чего вывести в .out-12  строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия. Обращаю ваше внимание - с этого момента мы работаем строго по заданию. Hello - с большой буквы. Между Hello имя один пробел (вы же включили отображение пробелов?). Вы не добавляете "от себя" - запятые, любые другие слова и символы. Аналогичные правила действуют и дальше по курсу.

function t12() {
    let userFirstName = document.querySelector('.i-12-1');
    let userSecondName = document.querySelector('.i-12-2');
    let output = document.querySelector('.out-12');
    output.textContent = `Hello ${userFirstName.value} ${userSecondName.value}`;
    userFirstName.value = '';
    userSecondName.value = '';
}

document.querySelector('.b-12').onclick = t12;

// Task 13.
// При нажатии кнопки .b-13 выполняется t13. Функция получает из input.i-13-1 и .i-13-2 числа в переменные a, b. После чего в .out-13 выводит их сумму. Преобразовывайте a, b в числа!!!!

function t13() {
    let a = document.querySelector('.i-13-1');
    let b = document.querySelector('.i-13-2');
    let output = document.querySelector('.out-13');
    output.textContent = +a.value + +b.value;
    a.value = '';
    b.value = '';
}

document.querySelector('.b-13').onclick = t13;

// Task 14.
// По нажатию кнопки .b-14 выполняется функция t14. Она заменяет значение value в input.i-14 на строку 'Go';

function t14() {
    let input = document.querySelector('input.i-14');
    input.value = 'Go';
}

document.querySelector('.b-14').onclick = t14;

// Task 15.
//  По нажатию кнопки .b-15 выполняется функция t15. Она присваивает .i-15 свойство style.border = "4px solid red";

function t15() {
    let input = document.querySelector('.i-15');
    input.style.border = "4px solid red";
}

document.querySelector('.b-15').onclick = t15;

// Task 16.
//По нажатию на кнопку .b-16 выполняется функция t16. Функция получает из .i-16-1 и i-16-2 числа. Выведите в .out-16 сумму данных чисел по нажатию кнопки b-16. Не переводите полученное из input в число!!!!

function t16() {
    let inputFirst = document.querySelector('.i-16-1');
    let inputSecond = document.querySelector('.i-16-2');
    let output = document.querySelector('.out-16');
    output.textContent = inputFirst.value + inputSecond.value;
    inputFirst.value = '';
    inputSecond.value = '';
}

document.querySelector('.b-16').onclick = t16;

// Task 17.
// По нажатию на кнопку .b-17 выполняется функция t17. Функция получает из .i-17 число. Изучите работу кода и запомните отличия. Попробуйте ввести числа 5, 4zz, zz4, -200, 33.05

function t17() {
    let a = document.querySelector('.i-17').value;
    document.querySelector('.out-17-1').innerHTML = +a;
    document.querySelector('.out-17-2').innerHTML = parseInt(a, 10);
    document.querySelector('.out-17-3').innerHTML = Number(a);
}

document.querySelector('.b-17').onclick = t17;

// Task 18.
//  По нажатию на кнопку .b-18 выполняется функция t18. Функция получает из .i-18 число в переменную a. Выводит в out-18 результат операции parseFloat(a). Попробуйте ввести значения 5, 33.02, 33.9a, -20.01

function t18() {
    let a = document.querySelector('.i-18').value;
    let output = document.querySelector('.out-18').textContent = parseFloat(a); //  разбирает текстовую строку, ищет и возвращает из неё десятичное число (если первый символ не число - вернет NaN)
}

document.querySelector('.b-18').onclick = t18;

// Task 19.
// По нажатию кнопки .b-19 функция t19 дожна в out-19 вывести сумму двух отрицательных чисел из input .i-19-1 и .i-19-2. 

function t19() {
    // преобразовываем в число с помощью унарного оператора "+"
    let inputFirst = +document.querySelector('.i-19-1').value;
    let inputSecond = +document.querySelector('.i-19-2').value;
    let output = document.querySelector('.out-19').textContent = inputFirst + inputSecond;

    // преобразовываем в число с помощью конструктора Number(); 
    // let inputFirst = Number(document.querySelector('.i-19-1').value);
    // let inputSecond = Number(document.querySelector('.i-19-2').value);
    // let output = document.querySelector('.out-19').textContent = inputFirst + inputSecond;
}

document.querySelector('.b-19').onclick = t19;

// Task 20
// При нажатии на кнопку .b-20 в out-20 выводится число - сколько раз была нажата кнопка .b-20;

let count = 0;

function t20() {
    count += 1; // можно сократить count++
    let output = document.querySelector('.out-20').textContent = count;  // тут допишите вывод в out-20
}

document.querySelector('.b-20').onclick = t20;