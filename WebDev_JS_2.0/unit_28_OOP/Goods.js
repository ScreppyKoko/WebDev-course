class Goods {
    constructor(name, amount, image, count) {
        this.name = name;
        this.amount = amount;
        this.image = image;
        this.count = count;
    }
    draw(output) {
        document.querySelector(output).innerHTML = 
        `<div class="card-product">
        <img class="picture" src="${this.image}" alt="picture">
        <p>"${this.name}"</p>
        <p>price: ${this.amount}</p>
        </div>`;
    }
}