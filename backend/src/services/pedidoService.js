import { crearPedidoTransaccion } from '../models/pedidoModel.js';

export const procesarPedido = async (datosPedido) => {

  const { cliente, total, detalles } = datosPedido;

  const resultado = await crearPedidoTransaccion(cliente, total, detalles);

  return resultado;
};