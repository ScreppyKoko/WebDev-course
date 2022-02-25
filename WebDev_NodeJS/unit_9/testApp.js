const mysql = require('mysql');

// конфигурация пакета
const conn = mysql.createConnection({
    host: "server.mysql.tools",
    user: "nodetest",
    database: "test_database",
    password: "XXXYYY"
});

conn.connect(function (err) {
    if (err) {
        return console.error("Ошибка: " + err.message);
    }
    else {
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});