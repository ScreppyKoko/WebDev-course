// Task 1
// Создайте функцию getRandomInt, которая выводит в блок .out-1 случайное целое число от 117 до 132. Все переменные должны быть внутри функции. Запустите эту функцию.

const out1 = document.querySelector('.out-1');

// функцию пишите здесь
function getRandomInt() {
    let random = Math.floor(Math.random() * (132 - 117) + 117);
    out1.textContent = random;
}
getRandomInt();

// Task 2.

// Чуть усложним. Сейчас первая задача жестко завязана на значения 117 и 132. Напишите функцию getRandomInt2, которая на основе min, max генерирует случайное целое число в этом диапазоне и выводит в out-2. Запустите эту функцию. 

const out2 = document.querySelector('.out-2');
let min = 888;
let max = 900;

// функцию пишите здесь
function getRandomInt2() {
    let random = Math.floor(Math.random() * (max - min) + min);
    out2.textContent = random;
}
getRandomInt2();

// Task 3.
// Не забываем, что функции можно вызывать внутри другой функции. Напишите функцию t3, которая срабатывает при клике по кнопке .b-3, 
// и запускает фукнции hello, и f2021. Если все сделано верно, то внутри .out-3 вы увидите текст hello 2021.

const out3 = document.querySelector('.out-3');

function hello() {
    out3.innerHTML = 'Hello ';
}

function f2021() {
    out3.innerHTML += 2021;
}


function t3() {
    // тут вызываете hello и f2021
    hello();
    f2021();
}

document.querySelector('.b-3').addEventListener('click', t3);

// Task 4
// Да, мы отработали запуск одной функции внутри другой, но сейчас мы чуть усложним задачу, чтобы вы понимали как можно вкладывать
//  фукнции одна в другую. Сразу оговорка, это ухудшает читабельность и разбор кода, пользуйтесь данным методом с умом. 
// Сейчас мы создадим две фукнции hello которая выводит в out-4 текст 'Hello ' и f2021, которая будет запускать hello и выводить += 2021. 
// Эти функции уже написаны, ознакомьтесь с ними. Обратите внимание, они написаны внутри функции t4. Почему? 
// Потому что если мы просто их напишем в коде, то они затрут функции с такими же именами выше по коду! А нам это не нужно. 
// В чем суть задачи? Напишите функцию, t4_1 которая запускает функцию t4 при клике на кнопке .b-4. 
// Обратите внимание, как у нас запускаются функции t4_1-> t4->f2021->hello

const out4 = document.querySelector('.out-4');


function t4() {
    function hello() {
        out4.innerHTML = 'Hello ';
    }
    function f2021() {
        hello();
        out4.innerHTML += 2021;
    }
    f2021();
}

// тут ваша функция t4_1
function t4_1() {
    t4();
}

document.querySelector('.b-4').addEventListener('click', t4_1);



// Task 5
// Устали? У нас есть две функции. Одна even, вторая odd. Напишите функцию t5, которая получает из input.i-5 число, 
// проверяет его на четность и запускает even если число четное и odd если нет.

const out5 = document.querySelector('.out-5');
let input5 = document.querySelector('.i-5');

function odd() {
    out5.textContent = 'odd';
}

function even() {
    out5.textContent = 'even';
}

function t5() {
    if (input5.value % 2 === 0) even();
    else odd();
}

document.querySelector('.b-5').addEventListener('click', t5);


// Task 6
// Давайте усложним задачу. У нас есть функцию getRandomInt2 которая использует переменные min, max выводит в out-2 случайное целое число. 
// Напишите функцию t6, которая запускает getRandomInt2, после чего, получает из .out-2 сгенерированное число и определяет четное оно или нет. 
// Если четное, запускает функцию even, если нет - odd. Обратите внимание, как написаны функции even, odd.

const out6 = document.querySelector('.out-6');

function t6() {
    function odd() {
        out6.textContent = 'odd';
    }
    function even() {
        out6.textContent = 'even';
    }
    min = 10000;
    max = 10099;
    // тут запускаете getRandomInt2
    getRandomInt2();
    console.log(out2.innerText)
    if (out2.innerText % 2 === 0) even();
    else odd();
}

document.querySelector('.b-6').addEventListener('click', t6);



// Task 7
// Дана переменная z7 равная 91. При клике по кнопке b-7 запускается функция t7, которая увеличивает переменную z7 на единицу и выводит в out-7.
// Добавьте условие, что если z7 равна 100, то дальше мы не увеличиваем значение z7.

const out7 = document.querySelector('.out-7');
let z7 = 91;

function t7() {
    out7.innerText = z7;
    z7++;
    if (z7 >= 100) z7 = 100;
}

document.querySelector('.b-7').addEventListener('click', t7);



// Task 8
// Дана переменная z8 равная 0. Напишите функцию t8, которая при клике по .b-8 увеличивает z8 на единицу и запускает функцию showNumber. 
// Если число z8 равно 9, то при последующем клике становится равным 0.

const out8 = document.querySelector('.out-8');
const digit = ['нуль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
let z8 = 0;

function showNumber() {
    out8.innerHTML = digit[z8];
}

function t8() {
    showNumber();
    z8++;
    if (z8 === 9) z8 = 0;
}

document.querySelector('.b-8').addEventListener('click', t8);



// Task 9
// Напишите функцию t9, которая в зависимости от значения переменной z9, делает активным option s.9 в таким же value. 
// Внимание, z9 может иметь значения 1, 2, 3, 4, 5. Действия запускаются по кнопке .b-9.

let z9 = 1;
const s9 = document.querySelector('.s-9');

function t9() {
    s9.value = z9;
}

document.querySelector('.b-9').addEventListener('click', t9);



// Task 10
// Напишите функцию, которая перебирает массив ar10 и в ar10_res записывает только числа из ar10. В конце функции t10 для вывода массива 
// запустите функцию showArr.

const out10 = document.querySelector('.out-10');
let ar10 = [1, 2, 3, '4', '22', 8];
let ar10_res = [];

function showArr() {
    out10.textContent = ar10_res.join('_');
}

function t10() {
    ar10_res = []; // очищаем
    for (let item of ar10) {
        if (typeof item === 'number') {
            ar10_res.push(item);
        }
        showArr();
    }
}

document.querySelector('.b-10').addEventListener('click', t10);

