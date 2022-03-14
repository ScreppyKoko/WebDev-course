const arr1 = [7, 4, 5, 6, 8];
const out1 = document.querySelector('.out-1');
const out2 = document.querySelector('.out-2');
const out3 = document.querySelector('.out-3');

function f1(arr, myFunc, block) {
    arr[3] = arr[3] * 2;
    // out1.innerHTML = arr1;
    myFunc(arr, block);
}

function showArr(arr, block) {
    let out = '';
    for (let i = 0; i < arr.length; i++) {
        out += arr[i] + '_';
    }
    block.innerHTML = out;
}

function showArr2(arr, block) {
    let out = '';
    for (let i = 0; i < arr.length; i++) {
        out += arr[i] + '*';
    }
    block.innerHTML = out;
}

f1(arr1, showArr, out1);
f1(arr1, showArr2, out2);

// пример коллбека

function squad(item) {
    return item ** 2;
}

// const arr2 = arr1.map(squad);
const arr2 = arr1.map(item => item ** 2);
console.log(arr2);
showArr(arr2, out3);

// Пример с input

document.querySelector('.b-4').addEventListener('click', () => {
    getUserName(fixUserName);
});

function getUserName(fixFunc) {
    const userName = document.querySelector('.i-4').value;
    // const userName = prompt('Enter your name: ');
    console.log(fixFunc(userName));
}

function fixUserName(str) {
    return str.trim().toLowerCase();
}

// асинхронные callback функции

// async function pageLoader(callback) {
//     const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     callback(data);
// }

// function pageLoader(callback) {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(json => callback(json));
// }

// function getAJAX(data) {
//     console.log('Послал запрос');
//     console.log('Ответ сервера');
//     console.log(data);
// }

// pageLoader(getAJAX);

// ад callback

// function pageLoader() {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(json => {
//             console.log('Послали запрос на страницу')
//             console.log('Ответ сервера: ')
//             console.log(json);
//             fetch('https://jsonplaceholder.typicode.com/users/' + json.userId)
//                 .then(response => response.json())
//                 .then(json => {
//                 console.log('Послали запрос на страницу')
//                 console.log('Ответ сервера: ')
//                 console.log(json)
//             });
//         });
// }
// pageLoader();

function pageLoader(url, callback) {
    fetch(url)
        .then(response => response.json())
        .then(json => callback(json))
}

function getAJAX(data) {
    console.log('Послали запрос на страницу')
    console.log('Ответ сервера: ')
    console.log(data);
    pageLoader('https://jsonplaceholder.typicode.com/users/' + data.userId, showUser);
}

function showUser(user){
    console.log(user);
}

pageLoader('https://jsonplaceholder.typicode.com/todos/1', getAJAX);