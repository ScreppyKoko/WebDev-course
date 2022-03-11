//  Task 3.
// <p>Создайте класс ModernButton который наследуется от класса Button. Добавьте через конструктор свойство borderRadius,
// которое по умолчанию равно нулю. Свойство принимает целое число. </p>

// Task 4
// <p>Поскольку класс ModernButton наследуется от Button, то он уже имеет метод render() и мы его можем применить.
// Но туда не входит свойство borderRadius. Давайте допишем данное свойство. Создайте метод render, внутри ModernButton.
// Чтобы не делать лишний код, мы можем получить через super метод render родителя - который возвращает готовый объект.
// Добавим ему свойство borderRadius и возвратим данный объект через return.</p>

// Task 5.
// <p>Создайте экземпляр класса ModernButton и выведите его в body на странице.</p>


class ModernButton extends Button {
   constructor(width, height, background, value, borderRadius = 0) {
      super(width, height, background, value);
      this.borderRadius = Math.round(borderRadius);
   }
   render() {
      // super.render() 
      let btn = document.createElement('button');
      btn.style.width = this.width + 'px';
      btn.style.height = this.height + 'px';
      btn.style.backgroundColor = this.background;
      btn.textContent = this.value;
      btn.style.marginRight = 20 + 'px';
      btn.style.borderRadius = this.borderRadius + '%';
      document.body.appendChild(btn);
   }
}

let btnMod = new ModernButton(300, 300, 'yellow', 'working', 50.49);
btnMod.render();
console.log(btnMod);
