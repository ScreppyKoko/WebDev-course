//  Task 3.
// <p>Создайте класс ModernButton который наследуется от класса Button. Добавьте через конструктор свойство borderRadius,
// которое по умолчанию равно нулю. Свойство принимает целое число. </p>

class ModernButton extends Button {
   constructor(width, height, background, value, borderRadius) {
      super(width, height, background, value);
      this.borderRadius = borderRadius;
   }
   render() {
      let btn = document.createElement('button');
      super.render();
      return btn.style.borderRadius = this.borderRadius + 'px';
   }
}

// Task 4
// <p>Поскольку класс ModernButton наследуется от Button, то он уже имеет метод render() и мы его можем применить.
// Но туда не входит свойство borderRadius. Давайте допишем данное свойство. Создайте метод render, внутри ModernButton.
// Чтобы не делать лишний код, мы можем получить через super метод render родителя - который возвращает готовый объект.
// Добавим ему свойство borderRadius и возвратим данный объект через return.</p>

let btnMod = new ModernButton(300, 200, 'yellow', 'working', 25);
btnMod.render();
console.log(btnMod);

// Task 5.
// <p>Создайте экземпляр класса ModernButton и выведите его в body на странице.</p>