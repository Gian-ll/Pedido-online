import { crearResena } from '../services/resenaService.js';

export const postResena = async (req, res) => {
  try {
    
    await crearResena(req.body);
    
    res.status(201).json({ mensaje: 'Reseña guardada correctamente' });
  } catch (error) {
    console.error(error);

    res.status(400).json({ mensaje: 'Error al guardar la reseña', error: error.message });
  }
};