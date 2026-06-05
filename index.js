const dontenv = require('dotenv');
dontenv.config();
const express = require('express');
const clienteController = require('./controllers/servicioPeluqueria.controller');
const conectarDB = require('./config/connectiondb');
const app = express();
app.use(express.json());

conectarDB();


app.get('/servicios', servicioController.consultar);

app.get('/servicios/:id', servicioController.consultarPorId);

app.post('/servicios', servicioController.crear);

app.put('/servicios/:id', servicioController.actualizar);

app.delete('/servicios/:id', servicioController.eliminar);

app.listen(8000, () => {

  console.log('Servidor escuchando en puerto http://localhost:8000/servicios');
});