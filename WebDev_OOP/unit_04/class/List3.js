// Task 7
// <p>Попробуем сделать полиморфизм. Создадим класс List3, который тоже наследуется от List (!!!! а не List2). Добавим свойство cssClass, 
// которое принимает массив стилей (пример ниже) и присваивает его в this.cssClass.</p>
//  <pre><code>
//  ['text-center', 'bold', 'text-red']
//  </code></pre>

// Task 8
// <p>Добавляем в List3 метод render, которые принимает работу родительского render и добавляет классы CSS. Только теперь учтите, что данные параметр - массив. И возвращает результат. </p>

// Task 9
// <p>Создайте экземпляр класса List3, заполните данные, выведите пример списка на страницу. </p>


class List3 extends List {
    constructor(array, cssClass) {
        super(array);
        this.cssClass = cssClass;
    }
    render() {
        const ul = super.render();
        this.cssClass.forEach((value) => ul.classList.add(value));
        console.log(ul);
        return ul;
    }
}