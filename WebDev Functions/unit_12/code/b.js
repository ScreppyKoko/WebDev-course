(function (){
let p = 60;
q = document.querySelector('.b-2');
q.onclick = () => {
    console.log('work q 2');
    p = p + 10;
    console.log(p);
}
})();