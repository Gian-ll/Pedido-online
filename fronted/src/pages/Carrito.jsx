import { useState } from "react";
import "./Carrito.css";

function Carrito({ carrito, onEliminar, onVaciar }) {
    const [datosCliente, setDatosCliente] = useState({
        nombre: "",
        dni: "",
        telefono: "",
        direccion: ""
    });

    const handleInputChange = (e) => {
        setDatosCliente({
            ...datosCliente,
            [e.target.name]: e.target.value
        });
    };

    const total = carrito.reduce(
        (acumulado, comida) => acumulado + comida.precio,
        0
    );
    
    return (
        <section className="carrito">
            <h1>Carrito de compras</h1>
            
            {carrito.length === 0 ? ( 
                <p className="carrito-vacio">
                    Tu carrito está vacío.
                </p>
            ) : (
                <>
                <div className="carrito-lista">
                    {carrito.map((comida, index) => (
                        <div className="carrito-item" key={`${comida.id}-${index}`}>
                            <img src={comida.imagen} alt={comida.nombre} className="carrito-imagen"
                        />
                        
                        <div className="carrito-info">
                            <h3>{comida.nombre}</h3>
                            <p>{comida.descripcion}</p>
                            <span>S/ {comida.precio.toFixed(2)}</span>
                        </div>
                        
                        <button className="eliminar-btn" onClick={() => onEliminar(index)} > Eliminar </button>
                    </div>
                ))}
                </div>
                
                <div className="carrito-formulario">
                    <h2>Datos de envío</h2>
                    <div className="form-group">
                        <input type="text" name="nombre" placeholder="Nombre completo" value={datosCliente.nombre} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <input type="text" name="dni" placeholder="DNI" value={datosCliente.dni} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <input type="tel" name="telefono" placeholder="Teléfono" value={datosCliente.telefono} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <input type="text" name="direccion" placeholder="Dirección de entrega" value={datosCliente.direccion} onChange={handleInputChange} />
                    </div>
                </div>

                <div className="carrito-resumen">
                    <h2>Resumen del pedido</h2>
                    <p>
                        Productos: <strong>{carrito.length}</strong>
                    </p>
                    
                    <p className="carrito-total">
                        Total: S/ {total.toFixed(2)}
                    </p>
                    
                    <button className="vaciar-btn" onClick={onVaciar}>
                        Vaciar carrito
                    </button>
                    
                    <button className="confirmar-btn">
                        Confirmar pedido
                    </button>
                </div>
                </>
            )}
        </section>
    );
}
export default Carrito;