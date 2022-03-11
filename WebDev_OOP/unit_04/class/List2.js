// Task 4.
// <p>Создайте класс List2, который наследуется от List. Добавьте ему через конструктор свойство cssClass, которое принимает строку. Свойство записывается в this.cssClass.</p>

// Task 5
// <p>Поскольку у нас уже есть метод render то мы можем его использовать и в List2. Создайте метод render в List2 и внутри него в переменную ul получите результат работы метода render класса List. 
// Теперь добавьте ul через classListAdd класс оформления из this.cssClass. Возвратите результат работы функции.
// </p>

// Task 6
// <p>Создайте экземпляр класса List2. Выведите список на страницу.</p>


class List2 extends List {
    constructor(array, cssClass = '') {
        super(array);
        this.cssClass = cssClass;
    }
    render() {
        let ul = super.render();
        ul.classList.add(this.cssClass);
    }
}