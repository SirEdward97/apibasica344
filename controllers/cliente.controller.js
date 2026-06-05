const servicios = require('../models/servicioPeluqueria.model');
const conectarDB = require('../config/connectiondb');

conectarDB();


exports.consultar = async (req, res) => {
  try {
    const servicio = await servicios.find();
    res.json(servicio);
  } catch (err) {
    res.status(500).json({ error: 'Error al consultar los servicios' });
  }
};


exports.consultarPorId = async (req, res) => {
  try {
    const servicio = await servicios.findById(req.params.id);
    if (!servicio) {
      return res.status(404).json({ error: 'Servicio no encontrado' });
    }
    res.json(servicio);
  } catch (err) {
    res.status(500).json({ error: 'Error al consultar el servicio' });
  }
};

exports.crear = async (req, res) => {
  try {
    const nuevoServicio = new servicios(req.body);
    await nuevoServicio.save();
    res.status(201).json(nuevoServicio);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear el servicio' });
  }
};

exports.actualizar = async (req, res) => {
  try {
    const servicioActualizado = await servicios.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!servicioActualizado) {
      return res.status(404).json({ error: 'Servicio no encontrado' });
    }
    res.json(servicioActualizado);
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar el servicio' });
  }
};

exports.eliminar = async (req, res) => {
  try {
    const servicioEliminado = await servicios.findByIdAndDelete(req.params.id);
    if (!servicioEliminado) {
      return res.status(404).json({ error: 'Servicio no encontrado' });
    }
    res.json({ message: 'Servicio eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar el servicio' });
  }
};
