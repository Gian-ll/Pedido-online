import "./Catalogo.css";
import FoodCard from "../componentes/Comid-card";

function Catalogo({ onAgregar }) {
    const comidas = [
        {
            id: 1,
            nombre: "Hamburguesa clásica",
            precio: 12.90,
            descripción: "Deliciosa hamburguesa con carne de res, queso, lechuga y tomate.",
            imagen: "/hamburguesa.jpg",
        },
        {
            id: 2,
            nombre: "Pollo broaster",
            precio: 15.90,
            descripción: "Crujiente pollo broaster acompañado de papas fritas.",
            imagen: "/pollo.jpg",
        },
    ];
    
    return (
    <section id="catalogo">
        <h1>Carta</h1>
        <div className="catalogo">
            {comidas.map((comida) => (
                <FoodCard
                key={comida.id}
                comida={comida}
                onAgregar={onAgregar}
                />
            ))}
        </div>
    </section> );
}

export default Catalogo;