let count = 0;
document.querySelector('.ls').onclick = () => {
    count++;
    localStorage.setItem('b1', count);
}