const mysql = require('mysql');


const conexao = mysql.createConnection({
    host: 'us-cdbr-east-05.cleardb.net',
    port: 3306,
    user: 'b4e47e428ac57f',
    password: '2bbcacf9',
    database: 'heroku_0ee5d952cb73cc4'
})

module.exports = conexao;



