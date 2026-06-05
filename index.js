
require('dotenv').config();

const express = require('express');
const servicioController = require('./controllers/servicioPeluqueria.controller');

const app = express();
app.use(express.json());



app.get('/servicios', servicioController.consultar);

app.get('/servicios/:id', servicioController.consultarPorId);

app.post('/servicios', servicioController.crear);

app.put('/servicios/:id', servicioController.actualizar);

app.delete('/servicios/:id', servicioController.eliminar);

app.listen(8000, () => {

  console.log('Servidor escuchando en puerto http://localhost:8000/servicios');
});