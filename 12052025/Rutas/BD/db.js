const mysql = require('mysql2');

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin',
    database: 'node_crud',
    port: 3306
});

db.connect(err => {
    if (err) {
        console.error('Error en la conexión a la DB:', err);
    } else {
        console.log('Conexión realizada con éxito');
    }
});

module.exports = db;
