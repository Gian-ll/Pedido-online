import "./Historial.css";

function Historial({ historial }) {
  if (!historial || historial.length === 0) {
    return (
      <section className="historial">
        <h1>Historial de Compras</h1>
        <p className="historial-vacio">No has realizado ninguna compra todavía.</p>
      </section>
    );
  }

  return (
    <section className="historial">
      <h1>Historial de Compras</h1>
      <div className="historial-lista">
        {historial.map((pedido, index) => (
          <div className="historial-card" key={index}>
            <div className="historial-header">
              <h3>Pedido #{pedido.id_pedido || historial.length - index}</h3>
              <span>{pedido.fecha}</span>
            </div>
            <div className="historial-cliente">
              <p><strong>Cliente:</strong> {pedido.cliente.nombre || "Anónimo"}</p>
              <p><strong>Dirección:</strong> {pedido.cliente.direccion || "Recojo en tienda"}</p>
            </div>
            <div className="historial-detalles">
              <h4>Productos:</h4>
              <ul>
                {pedido.items.map((item, i) => (
                  <li key={i}>
                    {item.nombre} - S/ {item.precio.toFixed(2)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="historial-total">
              <strong>Total pagado: S/ {pedido.total.toFixed(2)}</strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Historial;
