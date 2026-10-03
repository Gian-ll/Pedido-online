import React, { useEffect, useState } from 'react';
import PlatoCard from '../componentes/PlatoCard';
import ResenasCategory from '../componentes/ResenasCategory';
import './CategoryPage.css';

function Bebidas({ onAgregar }) {
    const [platos, setPlatos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/menu')
            .then(res => res.json())
            .then(data => {
                const bebidas = data
                    .filter(item => item.categoria_id_categoria === 4)
                    .map(item => ({ ...item, id: item.id_comida }));
                setPlatos(bebidas);
            })
            .catch(err => console.error("Error cargando bebidas:", err));
    }, []);

    return (
        <section className="category-page">
            <h1>Bebidas</h1>
            <div className="platos-grid">
                {platos.length > 0 ? (
                    platos.map(plato => (
                        <PlatoCard key={plato.id} plato={plato} onAgregar={onAgregar} />
                    ))
                ) : (
                    <p style={{ textAlign: 'center', color: '#666' }}>Cargando bebidas...</p>
                )}
            </div>
            {platos.length > 0 && <ResenasCategory platos={platos} />}
        </section>
    );
}

export default Bebidas;
