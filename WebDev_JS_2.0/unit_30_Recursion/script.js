let a = 0;
function rec() {
    a += 2;
    console.log(a)
    if (a > 10) return a;
    rec();
}

rec();

let offset = 0;
const squad = document.querySelector('.test-2');
function move() {
    squad.style.left = offset + 'px';
    offset = offset + 5;
    if (offset > 300) return true;
    setTimeout(move, 100);
}

document.querySelector('button').onclick = move;