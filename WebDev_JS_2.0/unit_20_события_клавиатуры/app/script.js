document.querySelector('.i-1').onkeypress = function (event) {
    console.log('keypress');
    console.log('charCode: ' + event.charCode); //q 113 Q 81
    console.log('code: ' + event.code);
    console.log('key: ' + event.key);
    console.log('keyCode: ' + event.keyCode);
    // console.log(event);
}

document.querySelector('.i-1').onkeydown = function (event) {
    console.log('keydown');
    console.log('charCode: ' + event.charCode); //q 113 Q 81
    console.log('code: ' + event.code);
    console.log('key: ' + event.key);
    console.log('keyCode: ' + event.keyCode);
    // console.log(event);
    if (event.key == 'CapsLock') {
        document.querySelector('.ch-1').checked = true;
    }
    else {
        document.querySelector('.ch-1').checked = false;
    }
}

document.querySelector('.i-1').onkeyup = function (event) {
    console.log('keyup');
    console.log('charCode: ' + event.charCode); //q 113 Q 81
    console.log('code: ' + event.code);
    console.log('key: ' + event.key);
    console.log('keyCode: ' + event.keyCode);
}

document.querySelector('.i-2').onkeypress = function (event) {
    console.log('keypress');
    console.log('charCode: ' + event.charCode); //q 113 Q 81
    console.log('code: ' + event.code);
    console.log('key: ' + event.key);
    console.log('keyCode: ' + event.keyCode);
    // console.log(event);
    const a = {
        q: 'w',
        w: 'e'
    }
    document.querySelector('.i-2').value += a[event.key];
    return false;
}