function myAlert(a, c, d) {
    let b = `<p class="${c}">${a}</p>`;
    document.querySelector(d).innerHTML = b;
}

myAlert('Hi', 'red', '.test');
myAlert('Hello', 'orange', '.test2');


// class!!!!!!!!!!!!!!!!!!!!!

let m = new Alert('My message', 'red', '.test');
console.log(m);
m.showAlert();

let m2 = new Alert2('My message', 'red', '.test', 'account_balance');
m2.showIconAlert();
m2.myAlert(this.message);