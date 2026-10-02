import conexion from '../config/db.js';

export const guardarResena = async (puntuacion, comentario, comida_id_comida) => {

  const sql = 'INSERT INTO resena (puntuacion, comentario, comida_id_comida) VALUES (?, ?, ?)';
  const [resultado] = await conexion.query(sql, [puntuacion, comentario, comida_id_comida]);
  return resultado;
};

export const obtenerResenasPorComida = async (id_comida) => {

  const sql = 'SELECT puntuacion, comentario FROM resena WHERE comida_id_comida = ?';
  const [filas] = await conexion.query(sql, [id_comida]);
  return filas;
};