class Validate {
    constructor(a) {
        this.a = a;
    }
    static isNumber(param) {
        if (typeof param === 'number') return true;
        else return false;
    }
    static isInt(param) {
        if (Number.isInteger(param) === true) return true;
        else return false;
    }
    static isFloat(param) {
        if (typeof param === 'number' && Number.isInteger(param) === false) return true;
        else return false;
    }
    static isChar(param) {
        if (param.length === 1) return true;
        else return false;
    }
    static isString(param) {
        if (typeof param === 'string') return true;
        else return false;
    }
    static isBoolean(param) {
        if (typeof param === 'boolean') return true;
        else return false;
    }
    static isArray(param) {
        if (Array.isArray(param) === true) return true;
        else return false;
    }
    static toMoney(param) {
        if (Number.isInteger(param) === true) return param.toLocaleString('ru') + '.00'
        else return parseFloat(param.toFixed(2)).toLocaleString('ru');
    }
    
}

console.log(Validate.isNumber(5));    // +

console.log(Validate.isInt(-1));    // +   

console.log(Validate.isFloat(1.1));    // +

console.log(Validate.isChar('a'));    // +

console.log(Validate.isString(''));    // +

console.log(Validate.isBoolean(true));    // +    

console.log(Validate.isArray([1]))

console.log(Validate.toMoney(1000000.22));

