import "./Catalogo.css";
import FoodCard from "../componentes/Comid-card";

function Catalogo({ onAbrirCategoria }) {
    const categorias = [
        {
            id: 1,
            nombre: "Pizzas",
            descripcion: "Deliciosas pizzas artesanales con los mejores ingredientes, horneadas a la perfección.",
            imagen: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
            ruta: "pizzas"
        },
        {
            id: 2,
            nombre: "Sándwiches",
            descripcion: "Sándwiches gourmet preparados con pan recién horneado y rellenos generosos.",
            imagen: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80",
            ruta: "sandwiches"
        },
        {
            id: 3,
            nombre: "Ensaladas",
            descripcion: "Frescas ensaladas con vegetales de temporada y aderezos especiales de la casa.",
            imagen: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
            ruta: "ensaladas"
        },
        {
            id: 4,
            nombre: "Bebidas",
            descripcion: "Refrescantes bebidas naturales, gaseosas y cócteles sin alcohol.",
            imagen: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=600&q=80",
            ruta: "bebidas"
        },
    ];

    return (
        <section id="catalogo">
            <h1>Nuestro Menú</h1>
            <div className="catalogo">
                {categorias.map((categoria) => (
                    <FoodCard
                        key={categoria.id}
                        comida={categoria}
                        onAbrirCategoria={onAbrirCategoria}
                    />
                ))}
            </div>
        </section>
    );
}

export default Catalogo;