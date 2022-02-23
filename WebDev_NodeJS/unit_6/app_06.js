// Task 1
// Напишите функцию t1, которая  выводит содержимое файла t1.txt в папке home6. Помимо вывода функци должна возвращать данное значение.
const fs = require('fs');
const path = require('path');

function t1() {
    fs.readFile('home6/t1.txt', 'utf-8', (err, data) => {
        return console.log(data)
    });
}

console.log(t1());


// Task 2.

// Напишите функцию t2, которая  выводит содержимое файла указанного в параметрах файла. Помимо вывода функци должна возвращать данное значение.


function t2(filePath) {
    fs.readFile(`home6/${filePath}`, 'utf-8', (err, data) => {
        return console.log(data)
    })
}

let filePath = 'examplepatthfile.txt';
console.log(t2(filePath));


// Task 3.
// Напишите функцию t3, которая  выводит список файлов указанной в параметре папки ( в виде массива ) и возвращает данный массив.

function t3(folderName) {
    fs.readdir(folderName, (err, data) => {
        return console.log(data)
    })
}

console.log(t3('home6'));

// Task 4
// Напишите функцию t4 которая принимает имя файла и возвращает его размер в килобайтах (только число)


function t4(filepath) {
    fs.readdir('home6', (err, data) => {
        data.forEach(file => {
            if (file === filepath) {
                let fileSize = fs.statSync('home6/' + file).size;
                return console.log(fileSize / 1000)
            }
        })
    })
}

console.log(t4('app.js'));


// Task 5
// Напишите функцию t5, которая принимает параметр число ( например размер) и возвращает строку по правилам
//если число от 0 до 99 то просто возвращает эту строку и добавляет B
//    512 -> 512B
// если число от 1000 до 999 999 то делит на 1000 и добавляет kB
// 30000 -> 30кB
// если число от 1000000 и выше то делит на 1000000 и добавляет MB
// 13000000 -> 13MB

function t5(a) {
    if (a > 0 && a <= 99) return a + 'B'
    else if (a >= 1000 && a <= 999999) return a / 1000 + 'kB'
    else return a / 1000000 + 'MB'
}

console.log(t5(8988989));


// Task 6
// Напишите функцию t6 которая выводит содержимое папки. В одной строке выводится имя файла, пробел его размер
// ( используем t5) перенос строки.

function t6(exFolder) {
    fs.readdir(exFolder, (err, data) => {
        data.forEach(file => {
            let fileSize = fs.statSync(`${exFolder}/` + file).size;
            console.log(`${file} ${t5(fileSize)}`)
        })
    })
}

t6('home6');


// Task 7
// Напишите функцию t7, которая принимает путь к файлу и выводит и возвращает его расширение. 

function t7(exPath) {
    fs.readdir(exPath, (err, data) => {
        return console.log(path.extname(exPath));
    })
}

console.log(t7('t1.txt'));

// Task 8
// Напишите функцию t8 принимает имя папки и выводит и возвращает суммарный размер файлов в ней.

function t8(exPath) {
    fs.readdir(exPath, (err, data) => {
        let sumFileSize = 0;
        data.forEach(file => {
            let fileSize = fs.statSync(`${exPath}/` + file).size;
            sumFileSize += fileSize
        })
        return console.log(sumFileSize)
    })
}

t8('home6');


// Task 9
// Создайте функцию t9, которая принимает два параметра - имя папки и файла и проверяет есть ли данный файл в папке.
// Функция должна возвращать true или false.

function t9(folder, file) {
    fs.readdir(folder, (err, data) => {
        data.forEach(item => {
            console.log(item + 11111111111111111)
        })
    })
}

console.log(t9('home6', 't1.txt'));

// Task 10
// Создайте функцию t10, которая принимает имя файла и которая возвращает false если файла нет в текущей папке
// или его размер равен нулю и размер файла если он существует и его размер больше нуля.

function t10(a) {

}

console.log(t10('filename'));

