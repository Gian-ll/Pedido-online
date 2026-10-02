import { listarMenu } from '../services/comidaService.js';

export const getComidas = async (req, res) => {
  try {
    const menu = await listarMenu();
    res.json(menu);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener el menú' });
  }
};