function myAlert(text, className, selector) {
    let b = `<p class=${className}>${text}</p>`
    document.querySelector(selector).innerHTML = b;
}

myAlert(
    'Hello',
    'red',
    '.test'
);
myAlert(
    'Yoooowwwww',
    'orange',
    '.test2'
);

// вызов классов
//* родительский класс
let m = new Ale('HELLO MTFCR', 'red', '.test');
console.log(m)
m.showAle();

//* наследник
let m2 = new AleHeir('HELLO MTFCR', 'red', '.test', 'visibility_off')
m2.showIconAlert();
m2.myAlert();