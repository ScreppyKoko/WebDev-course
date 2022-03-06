const http = require('http');
const url = require('url');  // модуль нужен для разбора данных, пришедших из адресной строки
const { parse } = require('querystring');

http.createServer((request, response) => {
    console.log('server work');
    if (request.method == 'GET') {
        // GET -> получить обработать
        console.log(request.method)   // получаем метод запроса (запрос делал через Postman)
        let urlRequest = url.parse(request.url, true);
        // console.log(urlRequest)
        console.log(urlRequest.query.test)  // получаем GET параметры
        if (urlRequest.query.test % 2 == 0) {
            response.end('even');
        }
        response.end('odd');
    }
    else {
        // POST -> получить обработать
        // правильно было бы подключить Express для обработки POST запроса
        let body = '';
        // потоковое чтение файла "кусочками"
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            console.log(body);
            let params = parse(body);
            console.log(params);
            console.log(params.hi);
            response.end('ok');
        });
    }
}).listen(3000);