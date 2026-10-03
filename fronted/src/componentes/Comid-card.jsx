import "./Comid-card.css";

function FoodCard({ comida, onAbrirCategoria }) {
    return (
    <article className="category-card" onClick={() => onAbrirCategoria(comida.ruta)}>
        <img className="category-image" src={comida.imagen} alt={comida.nombre} />
        <div className="category-info">
            <h3>{comida.nombre}</h3>
        </div>
    </article>
    );
}

export default FoodCard;
