function onButtonClick(selector, func) {
    document.querySelector(selector).addEventListener('click', func);
}

function sendRequest(link, params1, params2, output, method = 'GET') {
    let a = new Promise ((resolve, reject) => {
        if (method === 'POST') {
            fetch(link, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: params1,
            })
                .then(response => {
                    resolve(response.text());
                });
        } 
        if (method === 'GET') {
            fetch(link + params1)
                .then(data => {
                    resolve(data.text());
                });
        }
    });
    let b = new Promise ((resolve, reject) => {
        if (method === 'POST') {
            fetch(link, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: params2,
            })
            .then(response => {
                resolve(response.text());
            });
        } 
        if (method === 'GET') {
            fetch(link + params2)
                .then(data => {
                    resolve(data.text());
                });
        }
    });
    Promise.all([a, b]).then(value => {
        document.querySelector(output).textContent = value.join(', ');
    });
}

// Task 1 ============================================
/* <p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два запроса объедините с помощью promiseAll. Результат выведите в out-1 результат. Запускаться функция
    должна по нажатию b-1.</p>
*/

function t1() {
    sendRequest(
        'http://getpost.itgid.info/index2.php',
        '?auth=7859d9d42a8834141d529577207c9596&action=1',
        '?auth=7859d9d42a8834141d529577207c9596&action=2&name=Aleks',
        '.out-1'
    );
}

// ваше событие здесь!!!
onButtonClick('.b-1', t1);

// Task 2 ============================================
/* 
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.</p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
заданном
диапазоне.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. </p>

*/

function t2() {
    sendRequest(
        'http://getpost.itgid.info/index2.php',
        '?auth=7859d9d42a8834141d529577207c9596&action=3&num1=4&num2=8',
        '?auth=7859d9d42a8834141d529577207c9596&action=4&num1=4&num2=8',
        '.out-2'
    );
}

// ваше событие здесь!!!
onButtonClick('.b-2', t2);

// Task 3 ============================================
/*  
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два
запроса объедините с помощью promiseAll.
Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. </p>
*/

function t3() {
    sendRequest(
        'http://getpost.itgid.info/index2.php',
        '?auth=7859d9d42a8834141d529577207c9596&action=5',
        '?auth=7859d9d42a8834141d529577207c9596&action=6&num1=11&num2=13',
        '.out-3'
    );
}

// ваше событие здесь!!!
onButtonClick('.b-3', t3);

// Task 4 ============================================
/*  
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все
сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Выведите в out-4 результат. Запускаться функция должна по нажатию b-4.</p>

*/

function t4() {
    sendRequest(
        'http://getpost.itgid.info/index2.php',
        '?auth=7859d9d42a8834141d529577207c9596&action=7',
        '?auth=7859d9d42a8834141d529577207c9596&action=8',
        '.out-4'
    );
}

// ваше событие здесь!!!
onButtonClick('.b-4', t4);

// Task 5 ============================================
/*  
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1.</p>
<p>Отправьте
POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два
запроса объедините с помощью promiseAll. Результат выведите в out-5 результат. Запускаться функция
должна по нажатию b-5.</p>
*/

function t5() {
    sendRequest(
        'http://getpost.itgid.info/index2.php',
        'auth=7859d9d42a8834141d529577207c9596&action=1',
        'auth=7859d9d42a8834141d529577207c9596&action=2&name=Aleks',
        '.out-5',
        'POST'
    );
}

// ваше событие здесь!!!
onButtonClick('.b-5', t5);

// Task 6 ============================================
/* 
<p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3.
    Добавьте
    параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. </p>
<p>Отправьте POST
    запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
    Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
    заданном
    диапазоне.</p>
<p> Два запроса объедините с помощью promiseAll.
    Выведите в
    out-6 результат. Запускаться функция должна по нажатию b-6. </p>
*/

function t6() {
    sendRequest(
        'http://getpost.itgid.info/index2.php',
        'auth=7859d9d42a8834141d529577207c9596&action=3&num1=11&num2=17',
        'auth=7859d9d42a8834141d529577207c9596&action=4&num1=99&num2=111',
        '.out-6',
        'POST'
    );
}

// ваше событие здесь!!!
onButtonClick('.b-6', t6);


// Task 7 ============================================
/*  
<p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. </p>

*/

function t7() {
    sendRequest(
        'http://getpost.itgid.info/index2.php',
        'auth=7859d9d42a8834141d529577207c9596&action=5',
        'auth=7859d9d42a8834141d529577207c9596&action=6&num1=111&num2=155',
        '.out-7',
        'POST'
    );
}

// ваше событие здесь!!!
onButtonClick('.b-7', t7);

// Task 8 ============================================
/* 
<p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth
(ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Два запроса объедините с помощью promiseAll. Выведите в out-8 результат. Запускаться функция должна по
нажатию b-8.</p>
*/

function t8() {
    sendRequest(
        'http://getpost.itgid.info/index2.php',
        'auth=7859d9d42a8834141d529577207c9596&action=7',
        'auth=7859d9d42a8834141d529577207c9596&action=8&year=1995',
        '.out-8',
        'POST'
    );
}

// ваше событие здесь!!!
onButtonClick('.b-8', t8);

