'use strict';
// Task 1
// <p>Создайте экземпляр класса Test. Присвойте через сеттер значение свойству testProp. Выведите в консоль созданный
//     экземпляр. С помощью геттера получите значение свойства testProp. Выведите в консоль. Обратите внимание, что
//     свойства testProp у нас нет. Есть приватное свойство _testProp, но используя геттер и сеттер мы для пользователя
//     создаем видимость наличия свойства testProp.</p>

const exampleTest = new Test();
exampleTest.testProp = 'test succeful';
console.log(exampleTest);
console.log(exampleTest._testProp);

// Task 2
// <p>Усложним конструкцию геттера и сеттера - изучим класс Test2 и геттер и сеттер. Обратите внимание на метод -
//     setTestProp - он содержит тот же код, что и сеттер. Итак, мы добавили проверку. Давайте создадим экземпляр класса
//     Test2 и используя сеттер передадим ему парамет строку 'bbb', причем сделаем это так:

const exampleTest2 = new Test2();
console.log(exampleTest2.testProp = 'bbb'); 
console.log(exampleTest2);

// <p>Изучите что возвратил сеттер - ожидаемо, согласно коду, возвратил введенное число, все работает так, как мы ожидаем.
// </p>
// <p>Повторим те же действия с пустой строкой:</p>

console.log(exampleTest2.testProp = ''); 
console.log(exampleTest2);

// <p>Как видите, мы не знаем, что произошло. Ожидали false, но не получили его. И значение testProp осталось прежнее. Т.е.
//     ветка false просто не сработала. И применяя такой метод нужно быть осторожным, напрямую его в проверке (допустим
//     засунуть в if ) использовать нельзя.</p>

// <p>Повторим то же с нашим методом:</p>

console.log(exampleTest2.setTestProp('')); 
console.log(exampleTest2);

// <p>Как видно, мы в явном виде получили false. Таким образом можно сделать вывод, что если не требуется делать проверок
//     результат записи - то можно использовать сеттер, если нужно обрабатывать ввод и возвращать для проверки результат
//     операции - то необходимо писать свой сеттер.</p>



// Task 3
// <p>Выведите в консоль с помощью геттера значение testProp.</p>
console.log(exampleTest2.testProp);

// Task 4.
// <p>Создайте Test3 класс, и унаследуйтесь от Test2. Проверьте работоспособность сеттера и геттера в экземпляре класса
//     Test3. Сделайте вывод, работают ли сеттер и геттер из Test2 в новом классе?</p>


const exampleTest4 = new Test3();
exampleTest4.testProp = 'Test3 successfully';
console.log(exampleTest4);
console.log(exampleTest4.testProp);

// Task 5
// <p>Унаследуйтесь от Test2 и создайте новый класс Test4. Внутри него напишите новый метод set:
// </p>
// <pre><code>
// set testProp(a) {
//     this._testProp = a*10;
// }
// </code></pre>
// <p>Создайте экземпляр класса и проверьте работу сеттера. Сделайте вывод можно ли переназначать наследуемые сеттеры.</p>

const exampleTest5 = new Test4();
exampleTest5.testProp = 11;
console.log(exampleTest5);

// Task 6
// <p>Допишите в Test4 класс геттер для свойства testValue, который возвращает данное свойство если оно больше 100 и false
//     если меньше.</p>

console.log(exampleTest5.testProp)
exampleTest5.testProp = 10;
console.log(exampleTest5.testProp)


