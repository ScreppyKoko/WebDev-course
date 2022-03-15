class User {
    constructor(title) {
        this.title = title;
    }
    setName(name) {
        if (name !== '') {
            this._name = name;
            return name;
        } 
        return false;
    }
    set name(name) {
        if (name !== '') {
            this._name = name;
            return true;
        } 
        return false;
    }
    get name() {
        return this._name;
    }
}

let a = new User('Alex');
if (a.setName('Alex')) {
    console.log('work');
}
else {
    console.log('problem');
}
// a.name = 'with setter';
console.log(a);
console.log('name: ' + a.name);
console.log(a.setName('1'));