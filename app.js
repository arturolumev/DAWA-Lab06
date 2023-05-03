const express = require('express');
const app = express();

app.use(express.static('public'));

// Configurar el motor de plantillas
app.set('view engine', 'pug');
app.set('views', './views');

// Configurar EJS como motor de plantillas para una ruta específica
app.engine('ejs', require('ejs').renderFile);

// Ruta para renderizar la plantilla EJS
app.get('/inicio', (req, res) => {
  res.render('index.ejs', { nombre: 'Usuario EJS', titulo: 'Arturo Lume', descripcion: 'Hola, soy Arturo Lume y este es mi portafolio de desarrollador.' });
});

app.get('/sobreMi', (req, res) => {
  res.render('sobreMi.ejs', { nombre: 'Usuario EJS', logo: 'logo.png', titulo: 'Arturo Lume', descripcion1: 'Soy Arturo Lume Ventura, desarrollador web full-stack.', descripcion2: 'Soy egresado de Tecsup en la carrera de Diseño y Desarrollo de Software.' });
});

app.get('/proyectos', (req, res) => {
  res.render('proyectos.ejs', { titulo: 'Proyectos', proyecto: 'pokedex.png', proyecto_titulo: 'Pokedex', proyecto_descripcion: 'Desarrolle una Pokedex que permite almacenar en un inventario los Pokemon salvajes capturados y obtener información de estos.' });
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Aplicación web dinámica ejecutándose en el puerto 3000');
});
