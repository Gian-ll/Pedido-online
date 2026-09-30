import { guardarResena } from '../models/resenaModel.js';

export const crearResena = async (datosResena) => {
  const { puntuacion, comentario, comida_id_comida } = datosResena;

  if (puntuacion < 1 || puntuacion > 5) {
    throw new Error('La puntuación debe ser un número entre 1 y 5 estrellas.');
  }

  const resultado = await guardarResena(puntuacion, comentario, comida_id_comida);
  return resultado;
};