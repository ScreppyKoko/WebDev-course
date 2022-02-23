const fs = require('fs'); // подключаем встроенный модуль для работы с файлами
const path = require('path');// подключаем встроенный модуль в котором набор функций для работы с путями в файловой системе
const student = require('./one.json'); // читаем JSON файл (нативно)
const csv = require('csv-parser'); // модуль для работы с CSV файлами
const createCsvWriter = require('csv-writer').createObjectCsvWriter; // создаем новый файл

// создаем новый файл .txt с указанным содержимым.

// fs.writeFile('kukuepta.txt', 'kukuepta', (err) => {
//     if (err) console.log('Error');
// });

/**
 * Case 1. Записываем JSON file
 */
const man = {
    name: 'Alex',
    age: 22,
    department: 'History',
    car: 'vaz'
};

// создаем новый файл .JSON с указанным содержимым.
// с помощью JSON.stringify преобразовываем в строку.

// fs.writeFile('one.json', JSON.stringify(man), (err) => {
//     if (err) console.log('Error');
// });

/**
 * Case 2. Читаем JSON file
 */

console.log(student);

/**
 * Case 3. Читаем CSV (от англ. Comma-Separated Values — значения, разделённые запятыми)  file
 */

// const results = [];
// fs.createReadStream('table.csv')
//     .pipe(csv())
//     .on('data', (data) => results.push(data))
//     .on('end', () => {
//         console.log(results);
//     });

/**
 * Case 4. Пишем CSV file
 */

// указываем в каком формате будет представлен файл
// const csvWriter = createCsvWriter({
//     path: 'test.csv',
//     header: [
//         {id: 'name', title: 'NAME'},
//         {id: 'surname', title: 'LastName'},
//         {id: 'age', title: 'AGE'},
//         {id: 'gender', title: 'G'}
//     ]
// });

// формируем данные для нового CSV файла
// const testFileCsv = [
//     {
//         name: 'John',
//         surname: 'Snow',
//         age: 26,
//         gender: 'M'
//     }, {
//         name: 'Clair',
//         surname: 'White',
//         age: 33,
//         gender: 'F',
//     }, {
//         name: 'Fancy',
//         surname: 'Brown',
//         age: 78,
//         gender: 'F'
//     }
// ];

// csvWriter.writeRecords(testFileCsv)       // returns a promise
//     .then(() => {
//         console.log('...Done');
//     });