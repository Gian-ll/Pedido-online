import conexion from '../config/db.js';

export const crearPedidoTransaccion = async (cliente, total, detalles) => {
  // Pedimos una conexión exclusiva al Pool para esta operación compleja
  const connection = await conexion.getConnection();

  try {
    // 1. Iniciamos la transacción (Todo o Nada)
    await connection.beginTransaction();

    // 2. Guardamos al Cliente (nombre, dni, telefono)
    const sqlCliente = 'INSERT INTO cliente (nombre, dni, telefono) VALUES (?, ?, ?)';
    const [resultadoCliente] = await connection.query(sqlCliente, [cliente.nombre, cliente.dni, cliente.telefono]);
    const idCliente = resultadoCliente.insertId;

    // 3. Obtener un repartidor al azar de la tabla repartidor
    const [repartidores] = await connection.query('SELECT * FROM repartidor ORDER BY RAND() LIMIT 1');
    if (repartidores.length === 0) {
      throw new Error('No hay repartidores disponibles en la base de datos');
    }
    const repartidorAsignado = repartidores[0];

    // 4. Guardamos el Pedido
    const sqlPedido = 'INSERT INTO pedido (direccion, fecha_hora, total, cliente_id_cliente, repartidor_id_repartidor) VALUES (?, NOW(), ?, ?, ?)';
    const [resultadoPedido] = await connection.query(sqlPedido, [cliente.direccion, total, idCliente, repartidorAsignado.id_repartidor]);
    const idPedido = resultadoPedido.insertId;

    // 5. Guardamos cada plato (Detalle Pedido) vinculándolo al ID del pedido
    const sqlDetalle = 'INSERT INTO detalle_pedido (cantidad, subtotal, pedido_id_pedido, comida_id_comida) VALUES (?, ?, ?, ?)';

    for (const item of detalles) {
      const subtotal = item.cantidad * item.precio_unitario;
      await connection.query(sqlDetalle, [item.cantidad, subtotal, idPedido, item.id_comida]);
    }

    // 6. Si todo salió perfecto, confirmamos el guardado
    await connection.commit();

    // Devolvemos el número de orden y los datos del repartidor para el frontend
    return { idPedido, repartidor: repartidorAsignado };

  } catch (error) {
    // Si cualquier paso falla, deshacemos absolutamente todo
    await connection.rollback();
    throw error;

  } finally {
    // Siempre liberamos la conexión para que vuelva al Pool
    connection.release();
  }
};