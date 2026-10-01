import { crearPedidoTransaccion } from '../models/pedidoModel.js';

export const procesarPedido = async (datosPedido) => {
  // Extraemos las 3 partes fundamentales del paquete que enviará la página web
  const { cliente, total, detalles } = datosPedido;

  // Pasamos esos datos a la transacción que creaste en el modelo
  const numeroOrden = await crearPedidoTransaccion(cliente, total, detalles);
  
  return numeroOrden;
};