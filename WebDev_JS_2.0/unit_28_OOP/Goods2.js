class Goods2 extends Goods {
    constructor(name, amount, image, count, sale = false) {
        super(name, amount, image, count);
        this.sale = sale;
    }
    draw(output) {
        document.querySelector(output).innerHTML = 
        `<div class="card-product">
        <img class="picture" src="${this.image}" alt="picture">
        <p>"${this.name}"</p>
        <p>price: ${this.amount}</p>
        <p>On sale: ${this.sale}</p>
        </div>`;
    }
}