import conexion from '../config/db.js';

export const crearPedidoTransaccion = async (cliente, total, detalles) => {

  const connection = await conexion.getConnection();

  try {

    await connection.beginTransaction();


    const sqlCliente = 'INSERT INTO cliente (nombre, dni, telefono) VALUES (?, ?, ?)';
    const [resultadoCliente] = await connection.query(sqlCliente, [cliente.nombre, cliente.dni, cliente.telefono]);
    const idCliente = resultadoCliente.insertId;


    const [repartidores] = await connection.query('SELECT * FROM repartidor ORDER BY RAND() LIMIT 1');
    if (repartidores.length === 0) {
      throw new Error('No hay repartidores disponibles en la base de datos');
    }
    const repartidorAsignado = repartidores[0];


    const sqlPedido = 'INSERT INTO pedido (direccion, fecha_hora, total, cliente_id_cliente, repartidor_id_repartidor) VALUES (?, NOW(), ?, ?, ?)';
    const [resultadoPedido] = await connection.query(sqlPedido, [cliente.direccion, total, idCliente, repartidorAsignado.id_repartidor]);
    const idPedido = resultadoPedido.insertId;


    const sqlDetalle = 'INSERT INTO detalle_pedido (cantidad, subtotal, pedido_id_pedido, comida_id_comida) VALUES (?, ?, ?, ?)';

    for (const item of detalles) {
      const subtotal = item.cantidad * item.precio_unitario;
      await connection.query(sqlDetalle, [item.cantidad, subtotal, idPedido, item.id_comida]);
    }


    await connection.commit();


    return { idPedido, repartidor: repartidorAsignado };

  } catch (error) {

    await connection.rollback();
    throw error;

  } finally {

    connection.release();
  }
};