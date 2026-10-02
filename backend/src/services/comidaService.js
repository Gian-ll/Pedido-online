import { obtenerComidas } from '../models/comidaModel.js';

export const listarMenu = async () => {
  const menu = await obtenerComidas();
  return menu;
};