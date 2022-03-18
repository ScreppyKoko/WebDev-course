const user = {
    age: 19, 
    password: 'qwrty321',
    agreeToTerms: true
};

const user2 = {
    age: 19, 
    password: 'qwrty321',
    agreeToTerms: false
};

function checkAge(user) {
    return user.age > 18;
}

// console.log(checkAge(user));

function checkPass(user) {
    return user.password.length >= 8;
}

function checkTerms(user) {
    return user.agreeToTerms === true;
}

function validate(obj, ...func) {
    for (let i = 0; i < func.length; i++) {
        if (func[i](obj) === false) return false;
    }
    return true;
}

console.log(validate(user, checkAge, checkPass, checkTerms));

function createValidator(...func) {
    return function (obj) {
        for (let i = 0; i < func.length; i++) {
            if (func[i](obj) === false) return false;
        }
        return true;
    };
}

const validator1 = createValidator(checkAge, checkPass, checkTerms);
const validator2 = createValidator(checkAge, checkPass);

console.log(validator1(user2));
console.log(validator2(user2));