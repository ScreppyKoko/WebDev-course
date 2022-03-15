/**
 *  тут должно быть описание класса 
 */
class Ale {
    constructor(text, className, selector) {
        this.message = text;
        this.cssClass = className;
        this.output = selector;
    }
    showAle() {
        document.querySelector(this.output).innerHTML = `<p class="${this.cssClass}">${this.message}</p>`;
    }
    myAlert() {
        console.log(this.message);
    }
}