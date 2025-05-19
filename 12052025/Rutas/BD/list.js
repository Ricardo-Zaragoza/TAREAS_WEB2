const express = require('express');
const router = express.Router();
const db = require('./db'); 


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

module.exports = router;