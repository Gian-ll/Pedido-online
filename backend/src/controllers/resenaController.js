import { crearResena } from '../services/resenaService.js';
import { listarResenas } from '../services/resenaService.js';

export const postResena = async (req, res) => {
  try {
    
    await crearResena(req.body);

    res.status(201).json({ mensaje: 'Reseña guardada correctamente' });
  } catch (error) {
    console.error(error);

    res.status(400).json({ mensaje: 'Error al guardar la reseña', error: error.message });
  }
};

export const getResenas = async (req, res) => {
  try {
    
    const id_comida = req.params.id_comida; 
    const resenas = await listarResenas(id_comida);
    res.json(resenas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener las reseñas' });
  }
};