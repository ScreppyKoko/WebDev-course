const fs = require('fs');
const path = require('path');

// task 1 - читать файл

// way 1 Async, не останавливаем программу и идём дальше
fs.readFile('t1.txt', 'utf-8', (err, data) => {
    console.log(data + ' асинхронный'.toUpperCase())
});

// way 2 Sync, останавливаем программу и ждём
let text = fs.readFileSync('t1.txt', 'utf-8');
console.log(text + ' синхронный'.toUpperCase())

console.log('========================')

// task 2
fs.readdir('new', (err, data) => {
    console.log(data);
    data.forEach(file => {
        console.log(file)
        console.log(file + ' ' + path.extname(file));  // расширение файла
        console.log(fs.statSync('new/' + file));
        console.log(fs.statSync('new/' + file).size + 'байт - Размер файла');  // размер файла
    })
})

fs.writeFile('new/newfile.txt', 'goooooo\toooooooo', (err) => {
    if (err) console.log(err);
})