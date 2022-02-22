// auth=zhrgB3DxC8LoG7Gcilzg
let xhttp = new XMLHttpRequest();
let a = 0;
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this.responseText)
    }
}
//CORS
xhttp.open("GET", "http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=1", true);
xhttp.send();

function myFunction(data) {
    a = data;
    console.log(data);

}

let xhttp2 = new XMLHttpRequest();
xhttp2.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        myFunction2(this.responseText)
    }
}
xhttp2.open("POST", "http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=1", true);

xhttp2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp2.send('auth=zhrgB3DxC8LoG7Gcilzg&action=1')

function myFunction2(data) {
    console.log('POSt');
    a = data;
    console.log(data);
}