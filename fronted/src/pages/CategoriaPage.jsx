import React from 'react';
import PlatoCard from '../componentes/PlatoCard';
import ResenasCategory from '../componentes/ResenasCategory';
import './CategoryPage.css';

function CategoriaPage({ titulo, categoriaId, menu, onAgregar }) {
    // Filtramos el menú que ya descargó App.jsx en lugar de volver a descargarlo
    const platos = menu.filter(item => item.categoria_id_categoria === categoriaId);

    return (
        <section className="category-page">
            <h1>{titulo}</h1>
            <div className="platos-grid">
                {platos.length > 0 ? (
                    platos.map(plato => (
                        <PlatoCard key={plato.id} plato={plato} onAgregar={onAgregar} />
                    ))
                ) : (
                    <p style={{ textAlign: 'center', color: '#666' }}>Cargando {titulo.toLowerCase()}...</p>
                )}
            </div>
            {platos.length > 0 && <ResenasCategory platos={platos} />}
        </section>
    );
}

export default CategoriaPage;
