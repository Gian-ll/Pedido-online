import "./Catalogo.css";
import FoodCard from "../componentes/Comid-card";

function Catalogo({ onAgregar }) {
    const comidas = [
        {
            id: 1,
            nombre: "Hamburguesa clásica",
            precio: 12.90,
            descripcion: "Deliciosa hamburguesa con carne de res, queso, lechuga y tomate.",
            imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80",
        },
        {
            id: 2,
            nombre: "Pollo broaster",
            precio: 15.90,
            descripcion: "Crujiente pollo broaster acompañado de papas fritas.",
            imagen: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=500&q=80",
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