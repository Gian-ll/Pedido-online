import { procesarPedido } from '../services/pedidoService.js';

export const postPedido = async (req, res) => {
  try {
    const datosPedido = req.body; // Aquí llega todo el paquete (cliente, total, platos)
    const idPedido = await procesarPedido(datosPedido);
    
    res.status(201).json({
      mensaje: '¡Pedido registrado con éxito!',
      numero_orden: idPedido
    });
  } catch (error) {
    console.error('Error en la transacción del pedido:', error);
    res.status(500).json({ mensaje: 'Hubo un error al procesar el pedido' });
  }
};