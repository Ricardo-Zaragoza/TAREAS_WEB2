const express = require('express');
const router = express.Router();
const db = require('./db');

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

module.exports = router;
