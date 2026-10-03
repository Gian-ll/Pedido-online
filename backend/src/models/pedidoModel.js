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

    // 3. Guardamos el Pedido (direccion, fecha_hora, total, cliente_id_cliente, repartidor_id_repartidor)
    // Usaremos un repartidor por defecto (ej: 1) ya que es NOT NULL
    const sqlPedido = 'INSERT INTO pedido (direccion, fecha_hora, total, cliente_id_cliente, repartidor_id_repartidor) VALUES (?, NOW(), ?, ?, 1)';
    const [resultadoPedido] = await connection.query(sqlPedido, [cliente.direccion, total, idCliente]);
    const idPedido = resultadoPedido.insertId;

    // 4. Guardamos cada plato (Detalle Pedido) vinculándolo al ID del pedido
    const sqlDetalle = 'INSERT INTO detalle_pedido (cantidad, subtotal, pedido_id_pedido, comida_id_comida) VALUES (?, ?, ?, ?)';

    // Hacemos un bucle para guardar todos los platos de la lista
    for (const item of detalles) {
      const subtotal = item.cantidad * item.precio_unitario;
      await connection.query(sqlDetalle, [item.cantidad, subtotal, idPedido, item.id_comida]);
    }

    // 5. Si todo salió perfecto, confirmamos el guardado en las 3 tablas
    await connection.commit();

    // Devolvemos el número de orden para mostrárselo al cliente en la página web
    return idPedido;

  } catch (error) {
    // Si cualquier paso falla, deshacemos absolutamente todo
    await connection.rollback();
    throw error;

  } finally {
    // Siempre liberamos la conexión para que vuelva al Pool
    connection.release();
  }
};