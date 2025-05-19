const express = require('express');
const router = express.Router();
const db = require('./db');

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
