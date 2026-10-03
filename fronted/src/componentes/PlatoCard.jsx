import React from 'react';
import './PlatoCard.css';

function PlatoCard({ plato, onAgregar }) {
    const precioNum = Number(plato.precio) || 0;
    
    return (
        <article className="plato-card">
            <img className="plato-image" src={plato.imagen} alt={plato.nombre} />
            
            <div className="plato-info">
                <h3>{plato.nombre}</h3>
                
                <p className="plato-description">
                    {plato.descripcion}
                </p>
                
                <div className="plato-bottom">
                    <span className="plato-price">
                        S/ {precioNum.toFixed(2)}
                    </span>
                    
                    <button className="agregar-btn" onClick={() => onAgregar(plato)}>
                        Agregar
                    </button>
                </div>
            </div>
        </article>
    );
}

export default PlatoCard;
