
// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-1.  */

let block1 = document.querySelector('.div-1');

function t1() {
   return document.querySelector('.out-1').textContent = block1.textContent;
}
// ваше событие здесь!!!
block1.onclick = t1;


// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2. */

function t2(e) {
   return document.querySelector('.out-2').textContent = e.altKey;
}
// ваше событие здесь!!!
document.querySelector('.div-2').onclick = t2;

// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. Ширину выводите в out-3. */

let block3 = document.querySelector('.div-3');
let w = 75;

function t3() {
   w += 5;
   return block3.style.width = w + 'px';
}
// ваше событие здесь!!!
block3.onclick = t3;

// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-4. */

let block4 = document.querySelector('.div-4');

function t4() {
   document.querySelector('.out-4').textContent = block4.textContent;
}
// ваше событие здесь!!!
block4.ondblclick = t4;

// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс active если он есть и добавляется если такого класса нет. */

let block5 = document.querySelector('.div-5');

function t5() {
   block5.classList.toggle('active');
}
// ваше событие здесь!!!
block5.ondblclick = t5;

// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 еcли он показан и показывайте если скрыт. Скрытие и показ делайте через добавление - удаление класса .hide */

function t6() {
   document.querySelector('.ul-6').classList.toggle('hide');
}
// ваше событие здесь!!!
document.querySelector('.div-6').ondblclick = t6;


// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При повторном клике - удаляйте. */

let block7 = document.querySelector('.div-7');

function t7() {
   block7.classList.toggle('active');
   return false;
}
// ваше событие здесь!!!
block7.oncontextmenu = t7;

// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */

let checkbox8 = document.querySelector('.ch-8');

function stopStart(e) {
   e.preventDefault();
}

function t8() {
   if (checkbox8.checked) {
      console.log("true");
      document.addEventListener("contextmenu", stopStart);
   }
   else {
      console.log("false");
      document.removeEventListener("contextmenu", stopStart);
   }

   // if (checkbox8.checked) {
   //    document.oncontextmenu = () => {
   //       return false;
   //    };
   // } else {
   //    document.oncontextmenu = null; // затираем 
   // }
}
// ваше событие здесь!!!
checkbox8.onchange = t8;

// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши  - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */

function t9() {
   let img = document.querySelector('.div-9 img');
   img.setAttribute('src', 'img/2.png');
}
// ваше событие здесь!!!
document.querySelector('.div-9').oncontextmenu = t9;


// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. */

function t10() {
   let img = document.querySelector('.div-10 img');
   img.setAttribute('src', 'img/2.png');
}
// ваше событие здесь!!!
document.querySelector('.div-10').onmouseenter = t10;

// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. При уведении мыши - mouseleave - возвращайте исходное изображение. */

let block11 = document.querySelector('.div-11');
let img11 = document.querySelector('.div-11 img');
// ваше событие здесь!!!
block11.onmouseenter = () => {
   img11.setAttribute('src', 'img/2.png');
};

block11.onmouseleave = () => {
   img11.setAttribute('src', 'img/1.png');
};


// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. */

let block12 = document.querySelector('.div-12');

block12.onmousedown = () => {
   block12.classList.add('active');
};
// ваше событие здесь!!!

// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */

let block13 = document.querySelector('.div-13');

block13.onmousedown = () => {
   block13.classList.add('active');
};

block13.onmouseup = () => {
   block13.classList.remove('active');
};
// ваше событие здесь!!!


// Task 14 ============================================
/*  Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему событие onclick - которое, при клике добавляем блоку div-14 класс active. */

let block14 = document.querySelector('.div-14');

function t14() {
   block14.onclick = block14.classList.add('active');
}
document.querySelector('.b-14').onclick = t14;


// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте число внутри на 1. */

let block15 = document.querySelector('.div-15');
let counter = 1;
// ваше событие здесь!!!
block15.onmousemove = () => {
   block15.textContent = counter++;
};

// Task 16 ============================================
/*  Дан блок .div-16. Добавьте на него событие move. При каждом движении мыши увеличивайте ширину блока на 1px. */

let block16 = document.querySelector('.div-16');

function t16() {
   block16.style.width = w++ + 'px';
}
// ваше событие здесь!!!
// block16.onmousemove = t16;


// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move в задании 16. */

function t17On() {
   block16.onmousemove = t16;
}
function t17Off() {
   block16.onmousemove = null;
}
// ваше событие здесь!!!
// ваше событие здесь!!!
document.querySelector('.b-17_on').onclick = t17On;
document.querySelector('.b-17_off').onclick = t17Off;

// Task 18 ============================================
/*  Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок его ширину при событии onmouseenter. */

let block18 = document.querySelector('.div-18');

function t18() {
   block18.textContent = block18.offsetWidth;
}
// ваше событие здесь!!!
block18.onmouseenter = t18;


// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */

let block19 = document.querySelector('.div-19');

function t19() {
   block19.textContent = block19.classList;
}
// ваше событие здесь!!!
block19.onmouseout = t19;

// Task 20 ============================================
/*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом событии mousemove внутри progress. */

let val = document.querySelector('progress').value;

function t20() {
   val++;
   document.querySelector('progress').value = val;
}
// ваше событие здесь!!!
document.querySelector('progress').onmousemove = t20;