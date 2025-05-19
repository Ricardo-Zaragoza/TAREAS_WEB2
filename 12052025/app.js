const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// rutas
const listRoutes = require('./Rutas/BD/list');
const addRoutes = require('./Rutas/BD/add');
const editarRoutes = require('./Rutas/BD/editar');
const updateRoutes = require('./Rutas/BD/update');
const deleteRoutes = require('./Rutas/BD/delete');

app.use('/', listRoutes);
app.use('/', addRoutes);
app.use('/', editarRoutes);
app.use('/', updateRoutes);
app.use('/', deleteRoutes);

const port = 5721;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://127.0.0.1:${port}`);
});
