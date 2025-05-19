const express = require('express');
const router = express.Router();
const db = require('./db');

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

module.exports = router;
