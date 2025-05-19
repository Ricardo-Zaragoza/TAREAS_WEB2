const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

// Conexión a MySQL
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin',  // Cambia si tu password es otro
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

// Ruta para mostrar la lista de usuarios
router.get('/', (req, res) => {
    const consulta = 'SELECT * FROM users';
    db.query(consulta, (err, results) => {
        if (err) {
            console.error('Error al recuperar usuarios:', err);
            return res.send('Error, no se recuperaron los datos de la DB');
        }
        res.render('index', { users: results });
    });
});

// Ruta para agregar usuario
router.post('/add', (req, res) => {
    const { name, email } = req.body;
    const consulta = 'INSERT INTO users (name, email) VALUES (?, ?)';
    db.query(consulta, [name, email], err => {
        if (err) {
            console.error('Error al agregar usuario:', err);
            return res.send('Error');
        }
        res.redirect('/');
    });
});

// Ruta para mostrar formulario de edición
router.get('/edit/:id', (req, res) => {
    const { id } = req.params;
    const consulta = 'SELECT * FROM users WHERE id = ?';
    db.query(consulta, [id], (err, results) => {
        if (err) {
            console.error('Error al buscar usuario:', err);
            return res.send('Error');
        }
        res.render('edit', { user: results[0] });
    });
});

// Ruta para actualizar usuario
router.post('/update/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const consulta = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
    db.query(consulta, [name, email, id], err => {
        if (err) {
            console.error('Error al actualizar usuario:', err);
            return res.send('Error');
        }
        res.redirect('/');
    });
});

// Ruta para eliminar usuario
router.get('/delete/:id', (req, res) => {
    const { id } = req.params;
    const consulta = 'DELETE FROM users WHERE id = ?';
    db.query(consulta, [id], err => {
        if (err) {
            console.error('Error al eliminar usuario:', err);
            return res.send('Error');
        }
        res.redirect('/');
    });
});

module.exports = router;
