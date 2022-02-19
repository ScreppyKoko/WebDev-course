// функция 
// function declaration

// hello();


function testFunction() {
    const x = 5;
    const y = 10;
    console.log(x + y);
}

function hello() {
    console.log('Hello');
    testFunction();
}

function testFunction2() {
    function t3() {
        console.log('t3 function');
    }
    t3();
    console.log('test function 2');
}

// hello();
hello();
testFunction2();
// t3(); !Error

function unixTime() {
    let time = Math.floor(new Date().getTime());
    console.log(time);
}

unixTime();
unixTime();

function randomInt() {
    const min = 100;
    const max = 200;
    let rand = Math.floor(min + Math.random() * (max + 1 - min));
    console.log(rand);
}

randomInt();

function randomInt() {
    console.log('random int 555');
}

randomInt();
randomInt();

// console.log(randomInt);
let min = 300;
let max = 350;

function rand() {
    let rand = Math.floor(min + Math.random() * (max + 1 - min));
    console.log(rand);
}

rand();

min = 5;
max = 15;
rand();

let c = 9;

function count() {
    c++;
    console.log(c);
}

count();
count();
count();
count();
count();

document.querySelector('.out-1').addEventListener('mousemove', blockWidth);
// document.querySelector('.out-1').onclick = count;

let w = 100;
function blockWidth() {
    w++;
    document.querySelector('.out-1').style.width = w + 'px';
}