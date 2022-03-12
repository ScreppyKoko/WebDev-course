console.log(this); // window
// arrow function -> this -> window

document.querySelector('.b-1').addEventListener ('click', f1) 

function f1() {
    console.log(this)
    this.style.background = 'orange';
}

let p = document.querySelectorAll('p');
for (let i = 0; i < p.length; i++) {
    p[i].onclick = f1;
}

class Test { 
    constructor(name ,model) {
        this.name = name;
        this.model = model;
    }
    showThis() {
        console.log(this)
    }
}

const boat = new Test('smb', '744');
const boat2 = new Test('smb', 333);
console.log(boat);
console.log(boat2);
boat.showThis();
boat2.showThis();

class TestHeir extends Test {
    constructor(name, color) {
        super(name);
        this.color = color;
        console.log(this.name)
    }
}

let b = new TestHeir('tnk', 'red');
console.log(b)
