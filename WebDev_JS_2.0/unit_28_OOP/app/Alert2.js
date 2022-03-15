//! наследуемый класс

class AleHeir extends Ale {
    constructor(text, className, selector, icon) {
        super(text, className, selector);
        this.icon = icon;
    }
    showIconAlert() {
        document.querySelector(this.output).innerHTML = `<p class="${this.cssClass}"><span class="material-icons">${this.icon}</span>${this.message}</p>`;
    }
}