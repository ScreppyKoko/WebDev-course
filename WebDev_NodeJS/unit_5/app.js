const arg = process.argv;
// console.log(arg[4]);
// console.log(process);  // вывод полезных данных

const a = +arg[2];
const b = +arg[3];
console.log(typeof a);  // из консоли получаем строку!!! если нужно число, нужно преобразование

// if (a > b) console.log(a)
// else console.log(b)

let result = (a > b) ? a : b;
console.log(result);

let outputResultLoop = '';
for (let i = 0; i < 5; i++) {
    outputResultLoop += i + ' ';
}
console.log(outputResultLoop);


let arr = [1, 2, 4, 2, 1];
let outputResultMap = arr.map(elem => {
    return elem * 3;
})
console.log(outputResultMap)

let outputResultSet = new Set(arr)
outputResultSet.add(3);
console.log('Set size ' + outputResultSet.size);
console.log('Set has ' + outputResultSet.has(3))

let obj = {
    one: 1,
    two: 'Hello'
}
console.log(obj);