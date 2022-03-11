//! ********** способы КЛОНИРОВАНИЯ МАССИВОВ ****************

let a = [1, 3, 5, [7, 8]];
console.log('array a');
console.log(a)

let b = a; // ССЫЛКА НА МАССИВ а

//! ПОЛУЧИЛОСЬ, НО ЗАТРАТНО ПО ПРОИЗОДИТЕЛЬНОСТИ + ломает объекты 
//! ПЕРВЫЙ СПОСОБ - преобразование в JSON, а потом обратно из JSON в строку. 
let j = JSON.parse(JSON.stringify(a));


//!  ВТОРОЙ СПОСОБ - spread оператор. Подходит для одномерных массивов (иначе вложенность тоже берет по ссылке)
let s = [...a];


//! ТРЕТИЙ СПОСОБ - метод 'slice'. Аналогичная проблема с многомерными массивами
let d = a.slice();

//! ЧЕТВЕРТЫЙ СПОСОБ - метод 'Array.from()'. Аналогичная проблема с многомерными массивами
let t = Array.from(a);


//! ПЯТЫЙ СПОСОБ - метод 'concat'. Аналогичная проблема с многомерными массивами 
let u = a.concat([]); 


//!НЕ очень ПОДХОДЯЩИЙ!
//! ШЕСТОЙ СПОСОБ - любой цикл. Так же как и spread работает только с одномерными массивами 
let c = [];
for (let i = 0; i < a.length; i++) {
    c[i] = a[i];
}


//!НЕ очень ПОДХОДЯЩИЙ!
//!  СЕДЬМОЙ СПОСОБ - метод 'map'. Аналогичная проблема с многомерными массивами
let m = a.map((item) => {
    return item;
});


//!НЕ очень ПОДХОДЯЩИЙ!
//! ВОСЬМОЙ СПОСОБ - метод 'filter'. Аналогичная проблема с многомерными массивами 
let f = a.filter(() => true);


//!НЕ ПОДХОДЯЩИЙ!
//! ДЕВЯТЫЙ СПОСОБ - метод 'reduce'. Аналогичная проблема с многомерными массивами 
let r = a.reduce((x, elem) => {
    x.push(elem);
    return x;
}, []);

a.push('test'); //* проверяем
a[3].push(420); //* проверяем
console.log('a - с добавленным элементом')
console.log(a)

console.log('array ссылка');
console.log(b);

console.log('array JSON');
console.log(j);

console.log('array spread');
console.log(s);

console.log('array slice');
console.log(d);

console.log('array Array.from');
console.log(t);

console.log('array concat');
console.log(u);

console.log('array cycle');
console.log(c);

console.log('array map');
console.log(m);

console.log('array filter');
console.log(f);

console.log('array reduce');
console.log(r);



