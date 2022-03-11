// Task 1
//  <p>Создайте класс Button. Клас должен содержать свойства width, height (числовые значения дробь), 
// background - строка, и value - строка. Класс используется для создания кнопки. Все свойства задавайте через конструктор. 
// Для работы используем шаблон.</p>

//  Task 2.
//  <p>Допишите метод render() - который возвращает созданный объект (через createElement) button (тег button) с цветом
// применным фоном background, текстом value, высотой и шириной заданной в свойствах.
//  Создайте экземпляр класса Button и выведите в body. </p>


class Button {
    constructor(width, height, background, value) {
        this.width = width;
        this.height = height;
        this.background = background;
        this.value = value;
    }
    render() {
        let btn = document.createElement('button');
        btn.style.width = this.width + 'px';
        btn.style.height = this.height + 'px';
        btn.style.backgroundColor = this.background;
        btn.textContent = this.value;
        btn.style.marginRight = 20 + 'px';
        document.body.appendChild(btn);
    }
    checkSize() {
        if (this.width < 200) {
            return true;
        } else {
            return false;
        }
    }
}

let w = 85;
let h = 50;
let b = 'lime';
let v = 'click';
const firstBtn = new Button(w, h, b, v);
const secondBtn = new Button(200.1, 150, 'red', 'push');
firstBtn.render();
secondBtn.render();
console.log(firstBtn);
console.log(secondBtn);
console.log(firstBtn.checkSize());
console.log(secondBtn.checkSize());



