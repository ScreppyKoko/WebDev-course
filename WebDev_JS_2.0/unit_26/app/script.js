var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        callbackFunction(this.responseText);
    }
};
xhttp.open("GET", "http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=1", true);
xhttp.send();


function callbackFunction(data) {
    console.log(data);
}

fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=1')
    .then(data => {
        console.log(data);
        // data.text().then(data2 => {
        //     console.log(data2);
        // })
        return data.text();
    })
    .then(data => {
        console.log(data);
    })


fetch("http://getpost.itgid.info/index2.php", {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
        //'Content-Type': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'auth=zhrgB3DxC8LoG7Gcilzg&action=2&name=alex', // тип данных в body должен соответвовать значению заголовка "Content-Type"
})
    .then(response => response.text())
    .then(response => {
        console.log(response);
    })

// var xhttp2 = new XMLHttpRequest();
// xhttp2.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         callbackFunction2(this.responseText);
//     }
// };
// xhttp2.open("POST", "http://getpost.itgid.info/index2.php", true);
// xhttp2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// xhttp2.send('auth=zhrgB3DxC8LoG7Gcilzg&action=1');


// function callbackFunction2(data) {
//     console.log(data);
// }
