(function () {
let p = 10;
let q  = document.querySelector('.b-1');
q.onclick = ()=> {
    console.log('work q 1');
    p = p + 1;
    console.log(p);
}
})();