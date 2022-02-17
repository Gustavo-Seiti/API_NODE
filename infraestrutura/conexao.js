const mysql = require('mysql');


const conexao = mysql.createConnection({
    host: 'us-cdbr-east-05.cleardb.net',
    port: 3306,
    user: 'b53939ab8565a7',
    password: '27bc2914',
    database: 'us-cdbr-east-05.cleardb.net?'
})

module.exports = conexao;

