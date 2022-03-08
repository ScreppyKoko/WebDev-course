const URL = "http://getpost.itgid.info/index2.php";
const AUTH = "5ADcBxxxxxxxxx";

function getQueryString(obj) {
    let out = '';
    for (let key in obj) {
        out += '&' + key + '=' + obj[key];
    }
    return out;
}

function AJAX(method, params, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(this.responseText);
        }
    };
    xhttp.open(method, URL + '?auth=' + AUTH + getQueryString(params), true);
    xhttp.send();
}

function toConsole(data) {
    console.log(data);
}

function one() {
    let p = {
        action: 1
    }
    AJAX('GET', p, toConsole);
}

function two() {
    let p = {
        action: 2,
        name: 'Ivan'
    }
    AJAX('GET', p, toConsole);
}

one();
two();