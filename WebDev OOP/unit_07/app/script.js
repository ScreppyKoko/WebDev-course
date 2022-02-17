console.log(this); // window
// arrow function -> this -> window

// document.querySelector('.b-1').onclick = function () {
//     console.log(this);
//     this.style.background = 'orange';
// }

document.querySelector('.b-1').addEventListener('click', f1);


function f1() {
    console.log(this);
    this.style.background = 'orange';
}

let p = document.querySelectorAll('p');
for (let i = 0; i < p.length; i++) {
    p[i].onclick = f1;
}

class U2 {
    constructor(model) {
        this.model = model;
    }
    showThis() {
        console.log(this);
    }
}

const boat = new U2('744');
const boat2 = new U2(333);
console.log(boat);
console.log(boat2);
boat.showThis();
boat2.showThis();

class YellowSubmarine extends U2 {
    constructor(model, color) {
        super(model);
        this.color = color;
        console.log('------------')
        console.log(this.model);
    }
}

let b = new YellowSubmarine(666, 'red');
