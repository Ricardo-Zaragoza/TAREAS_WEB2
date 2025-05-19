const express = require('express');
const router = express.Router();
const db = require('./db');

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

module.exports = router;
