import "./Catalogo.css";
import FoodCard from "../componentes/Comid-card";

function Catalogo({ onAbrirCategoria }) {
    const categorias = [
        {
            id: 1,
            nombre: "Pizzas",
            imagen: "https://imagenesonline.s3.us-east-2.amazonaws.com/comidas/pizzas.avif",
            ruta: "pizzas"
        },
        {
            id: 2,
            nombre: "Sándwiches",
            imagen: "https://imagenesonline.s3.us-east-2.amazonaws.com/comidas/sandwiches.avif",
            ruta: "sandwiches"
        },
        {
            id: 3,
            nombre: "Ensaladas",
            imagen: "https://imagenesonline.s3.us-east-2.amazonaws.com/comidas/ensalada.avif",
            ruta: "ensaladas"
        },
        {
            id: 4,
            nombre: "Bebidas",
            imagen: "https://imagenesonline.s3.us-east-2.amazonaws.com/comidas/bebidas.avif",
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