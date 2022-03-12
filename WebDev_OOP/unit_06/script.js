


class User {
    // static test = true;
    constructor(name = '') {
        this.name = name.trim().toLowerCase();
    }
    getRole() {
        if (this.name === 'vova') return 'könig von ganz russland';
        else if (this.name === '') return false;
        else return 'sklaven';
    }
    static getRoleStatic() {
        if (this.name === 'vova') return 'könig von ganz russland';
        else if (this.name === '') return false;
        else return 'sklaven';
    }
    static setRoleStatic(name) {
        if (name === 'vova') return 'könig von ganz russland';
        else if (name === '') return false;
        else return 'sklaven';
    }
}

const person = new User('vova');
// console.log(person);
// console.log(person.getRole());
// console.log(User.getRole())  //! ошибка, если вызов напрямую без 'static'
// console.log(User.prototype.getRole()) //! альтернативный вариант без 'static'

// console.log(User.getRoleStatic())
// console.log(User.setRoleStatic(""))
// console.log(User)
// console.log(User.name)

class Student extends User {
    constructor(name = '') {
        super();
    }
}
// console.log(Student.test)

