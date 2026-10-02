import conexion from '../config/db.js';

export const obtenerComidas = async () => {

  const [filas] = await conexion.query('SELECT * FROM comida');
  return filas;
};