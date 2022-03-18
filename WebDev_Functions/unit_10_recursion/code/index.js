let t = 0;
function f1() {
    t++;
    console.log(t);
    if (t === 9) return console.error('!the end!'.toUpperCase());
    f1();
}
// f1();

//! цикл
function f2() {
    let out = '';
    for (let i = 1; i <= 30; i++) {
        out += i + ' ';
    }
    console.log(out);
}
// f2();

//! рекурсией
let i = 0;
let out = '';
function f3 () {
    i++;
    out += i + ' ';
    if (i >= 30) return;
    f3();
}
// f3();
// console.log(out);

//! лицо с низкой социальной ответственностью...
function randomInteger(min, max) {
//! случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

let sum = 0;
function moneyRecursion() {
    let m = randomInteger(0, 100);
    console.log('add: ' + m);
    sum += m;
    console.log('sum: ' + sum);
    if (sum >= 300) return;
    moneyRecursion();
}
// moneyRecursion();

function moneyCycle() {
    let sumCycle = 0;
    // for (let i = 0; true; i++) {
    while(true) {
        let m = randomInteger(0, 100);
        console.log('add: ' + m);
        sumCycle += m;
        console.log('sum: ' + sum);
        if(sumCycle >= 100) return;
    }
}
// moneyCycle();


const users = {
    "ivanov": {
        age: 25,
        parent: {
            "ivanov-a": {
                age: 45
            },
            "ivanov-b": {
                age: 43,
                parent: {
                    "sergeev-a": {
                        age: 88,
                        parent: {
                            "lionenko": {
                                age: 33,
                                parent: {
                                    "petrov": {}
                                }
                            }
                        }
                    },
                }
            }
        }
    },
    "kostenko": {
        age: 56,
        parent: {
            "ignatenko": {
                age: 44, 
                parent: {
                    "kuzkin": {}
                }
            },
            "sniezko": {
                age: 45
            }
        }
    }
}

for (let key in users) {
    userParentRecursion(users[key]);
    // console.log(key);
}
function userParentRecursion(obj) {
    if(obj.parent !== undefined) {
        for (let key in obj.parent) {
            console.log(key);
            userParentRecursion(obj.parent[key]);
        }
    }
}


let position = 0;
document.querySelector('.block').addEventListener('click', () => {
    for (let i = 0; i < 600; i++) {
        position++;
        document.querySelector('.block').style.left = position + 'px';
    }
});

function recursionAnimation() {
    position = position + 5;
    if (position > 400) return;
    document.querySelector('.block').style.left = position + 'px';
    animation();
}

function animation() {
    setTimeout(recursionAnimation, 100);
}

// animation();


//! вычисление факториала 
// с помощью цикла
function factorial1(n) {
    let s = 1;
    for (let i = 1; i <= n; i++) {
        s *= i;
        console.log(s);
    }
}
factorial1(5);

let s = 1;
function factorial2(n) {
    if (n === 0) return;
    s = s * n;
    factorial2(n - 1);
}
factorial2(5);
console.log(s);
