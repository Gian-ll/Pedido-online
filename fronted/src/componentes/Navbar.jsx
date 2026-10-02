import "./Navbar.css";

function Navbar({ cantidadCarrito, onAbrirCarrito, onAbrirCatalogo }) {
    return (
    <nav className="navbar">
        <div className="navbar-logo">
            <h2>PEDIDOS ONLINE</h2>
        </div>
        
        <div className="navbar-links">
            <button className="carta-btn" onClick={onAbrirCatalogo}> Carta </button>

            <button className="carrito-btn" onClick={onAbrirCarrito}>
                🛒 Carrito
                {cantidadCarrito > 0 && (
                    <span className="carrito-contador">
                        {cantidadCarrito}
                    </span>
                )}
            </button>
        </div>
    </nav>
    );
}

export default Navbar;