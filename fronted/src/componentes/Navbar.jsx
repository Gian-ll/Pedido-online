import "./Navbar.css";

function Navbar({ cantidadCarrito, onAbrirCarrito, onAbrirCatalogo, onAbrirHistorial }) {
    return (
    <nav className="navbar">
        <div className="navbar-logo" onClick={onAbrirCatalogo} style={{ cursor: 'pointer' }}>
            <svg width="220" height="45" viewBox="0 0 220 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(5, 4)">
                    <g className="hamburguesa-icono">
                        {/* Pan superior */}
                        <path d="M6 16 C 6 2, 29 2, 29 16 Z" fill="#FFB300"/>
                        {/* Semillas de ajonjolí */}
                        <ellipse cx="12" cy="10" rx="1.2" ry="1.8" fill="#fff" transform="rotate(-30 12 10)"/>
                        <ellipse cx="17.5" cy="7" rx="1.2" ry="1.8" fill="#fff" />
                        <ellipse cx="23" cy="10" rx="1.2" ry="1.8" fill="#fff" transform="rotate(30 23 10)"/>
                        {/* Lechuga */}
                        <path d="M3 18 Q 7 22 12 18 T 23 18 T 32 18" stroke="#00E676" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                        {/* Carne */}
                        <rect x="4" y="21" width="27" height="6" rx="3" fill="#5D4037"/>
                        {/* Pan inferior */}
                        <path d="M6 29 L29 29 C 29 34, 25 35, 17.5 35 C 10 35, 6 34, 6 29 Z" fill="#FFB300"/>
                    </g>
                </g>
                <text x="45" y="32" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="22" fill="#ffffff" letterSpacing="0.5">
                    PEDIDOS<tspan fill="#FFB300">ONLINE</tspan>
                </text>
            </svg>
        </div>
        
        <div className="navbar-links">
            <button className="carta-btn" onClick={onAbrirHistorial}> 📜 Historial </button>
            <button className="carta-btn" onClick={onAbrirCatalogo}> 🍽️ Carta </button>

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