//Установите Node.js с сайта программы. Повторите действия урока.

console.log('Если вы это видите - то сделали!!!');

// Task 2. Напишите функцию f2, которая принимает 2 числа и выводит и возвращает максимальное из них. Для этого используйте Math.

const f2 = (a, b) => {
   let maxNum = Math.max(a, b)
   console.log(maxNum);
   return maxNum;
};
console.log(f2(2, 5));

// Task 3. Напишите функцию f3, которая выводит и возвращает случайное число от 0 до 10.

const f3 = () => {
   let randomNum = Math.floor(Math.random() * (10 - 0)) + 0;
   console.log(randomNum);
   return randomNum;
};

console.log(f3());

// Task 4. Напишите функцию f4, которая выводит и возвращает случайное число от a до b.

const f4 = (a, b) => {
   let randomNum = Math.floor(Math.random() * (b - a)) + a;
   console.log(randomNum);
   return randomNum;
};

console.log(f4(10, 12));

// Тask 5. Напишите фукнцию f5, которая выводит и возвращает текущую дату в формате год-месяц-день. Причем делает это с ведущим нулем.
// Пример 2020-03-22

const f5 = () => {
   let today = new Date();
   let year = today.getFullYear();
   let month = String(today.getMonth() + 1).padStart(2, '0');
   let day = String(today.getDate()).padStart(2, '0');
   today = `${year}-${month}-${day}`;
   console.log(today);
   return today;
};

console.log(f5());

//Task 6. Напишите функцию f6, которая проверяет является ли введенный год високосным. Возвращает true если да, и false если нет. 

const f6 = (year) => {
   let realDate = new Date(year, 1, 29).getDate();
   if (realDate === 29) return true;
   else return false;
};

console.log(f6(2020))
