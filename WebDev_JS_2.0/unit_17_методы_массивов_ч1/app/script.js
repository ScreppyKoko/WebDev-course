let a = [4, 5, 12, 200, 1, 0, -2];

let b = a.map(function (item, index) {
    // console.log(index);
    return item * 5;
});

let c = a.filter(function (item, index) {
    if (item > 0) {
        return true;
    }
});
console.log(c);

