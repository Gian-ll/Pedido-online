import { useState } from "react";
import "./Historial.css";

function HistorialItem({ pedido, index, totalHistorial, onCancelar }) {
  const [expandido, setExpandido] = useState(false);
  const estaCancelado = pedido.estado === 'Cancelado';

  return (
    <div className={`historial-card ${estaCancelado ? 'cancelado' : ''}`}>
      <div className="historial-header">
        <div className="historial-info-basica">
          <h3>Pedido #{pedido.id_pedido || totalHistorial - index}</h3>
          <span className="historial-fecha">{pedido.fecha}</span>
        </div>
        <div className="historial-resumen">
          <strong>S/ {(Number(pedido.total) || 0).toFixed(2)}</strong>
          {estaCancelado && <span className="historial-estado-texto">Cancelado</span>}
          {!estaCancelado && (
            <button 
              className="btn-cancelar" 
              onClick={() => onCancelar(index)}
            >
              Cancelar
            </button>
          )}
          <button className="btn-detalles" onClick={() => setExpandido(!expandido)}>
            {expandido ? "Ocultar" : "Detalles"}
          </button>
        </div>
      </div>
      
      {expandido && (
        <div className="historial-contenido-extra">
          <div className="historial-info-grid">
            <div className="historial-cliente">
              <h4>Datos de Entrega</h4>
              <p><strong>Cliente:</strong> {pedido.cliente.nombre || "Anónimo"}</p>
              <p><strong>Dirección:</strong> {pedido.cliente.direccion || "Recojo en tienda"}</p>
            </div>
            {pedido.repartidor && (
              <div className="historial-repartidor">
                <h4>Repartidor Asignado</h4>
                <p><strong>Nombre:</strong> {pedido.repartidor.nombre || "No asignado"}</p>
                <p><strong>Teléfono:</strong> {pedido.repartidor.telefono || "No asignado"}</p>
              </div>
            )}
          </div>
          <div className="historial-detalles">
            <h4>Productos:</h4>
            <ul>
              {pedido.items.map((item, i) => (
                <li key={i}>
                  {item.nombre} 
                  <span>S/ {(Number(item.precio) || 0).toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

function Historial({ historial, onCancelar }) {
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
          <HistorialItem 
            key={index} 
            pedido={pedido} 
            index={index} 
            totalHistorial={historial.length} 
            onCancelar={onCancelar}
          />
        ))}
      </div>
    </section>
  );
}

export default Historial;
