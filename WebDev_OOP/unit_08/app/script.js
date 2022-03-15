const b1 = document.querySelector('.b-1');
const b2 = document.querySelector('.b-2');

b1.onclick = test;

function test(color, num) {
    console.log(this);
    console.log(num);
    this.style.background = color;
}

// test();  !!! при вызове будет ошибка т.к. нет явного this 

// test.call(b1)  // метод call сразу вызвал функцию и указал this = b1;

// b2.onclick = function () {
//     test.call(b1, 'green', 228);
// };

// сделали функцию обёртку, чтобы контролировать запуск метода call / apply
b2.onclick = function () {
    test.apply(b2, ["green", 228]);
};

// bind 
let a = test.bind(b1, "orange", 777)
let b = test.bind(b1, "red", 222)

b2.onclick = a;

var person = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
var person1 = {
    firstName:"John",
    lastName: "Doe",
}
console.log(person.fullName.call(person1, "Oslo", "Norway")); 