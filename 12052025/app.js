const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Importar rutas unificadas
const routes = require('./Rutas/routes');  // Ajusta la ruta si es necesario

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Configuración de motor de vistas y carpeta views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Usar rutas
app.use('/', routes);

// Puerto y arranque del servidor
const port = 5721;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://127.0.0.1:${port}`);
});