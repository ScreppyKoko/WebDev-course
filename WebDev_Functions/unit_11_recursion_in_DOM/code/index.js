let t = 0;
function f1() {
    t++;
    console.log(t);
    if (t === 100) return;
    f1();
}

// f1();
// цикл
function f2() {
    let out = '';
    for (let i = 1; i <= 30; i++) {
        out += i + ' ';
    }
    console.log(out);
}

// f2();
// рекурсией
let i = 0;
let out = '';
function f3() {
    i++;
    out += i + ' ';
    if (i >= 30) return;
    f3();
}
// f3();
// console.log(out);

// лицо с низкой социальной отв...
function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

let s1 = 0;
function moneyRecursion() {
    let m = randomInteger(0, 100);
    console.log('add: ' + m);
    s1 += m;
    console.log('sum: ' + s1);
    if (s1 >= 300) return;
    moneyRecursion();
}

// moneyRecursion();

function moneyCycle() {
    let s2 = 0;
    while (true) {
        let m = randomInteger(0, 100);
        console.log('add: ' + m);
        s2 += m;
        console.log('sum: ' + s2);
        if (s2 >= 300) return;
    }
}

// moneyCycle();

// const 
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

            },
            "sniezko": {
                age: 45
            }
        }
    }
}

function userParentRecursion(obj) {
    if (obj.parent !== undefined) {
        for (let key in obj.parent) {
            console.log(key);
            userParentRecursion(obj.parent[key]);
        }
    }
}

// for (let key in users) {
//     userParentRecursion(users[key]);
// }

let position = 0;
// document.querySelector('.block').addEventListener('click', () => {
//     for (let i = 0; i < 400; i++) {
//         position++;
//         document.querySelector('.block').style.left = position + 'px';
//     }
// });

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

// 1 * 2*3 5

function fact1(n) {
    let s = 1;
    for (let i = 1; i <= n; i++) {
        s = s * i;
    }
    console.log(s);
}
// fact1(5);

let s = 1;
function fact2(n) {
    if (n === 0) return;
    s = s * n;
    fact2(n - 1);
}
// fact2(5);
// console.log(s);

const tree = document.querySelector('.test');
// console.log(tree);

function treeTravelsal(elem) {
    let innerElements = elem.children;
    console.dir(elem);
    Array.from(innerElements).forEach(item => treeTravelsal(item));
}

treeTravelsal(tree);
