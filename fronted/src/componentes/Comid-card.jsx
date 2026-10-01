import "./Comid-card.css";

function FoodCard({ comida, onAgregar }) {
    return (
    <article className="food-card">

        <img className="food-image"
        src={comida.imagen}
        alt={comida.nombre}
        />
        
        <div className="food-info">
            <h3>{comida.nombre}</h3>
            
            <p className="food-description">
                {comida.descripcion}
            </p>
            
            <div className="food-bottom">
                <span className="food-price">
                    S/ {comida.precio.toFixed(2)}
                </span>
                
                <button className="add-button" onClick={() => onAgregar(comida)}>
                    Agregar
                </button>
            </div>
        </div>
    </article>
    );
}

export default FoodCard;
