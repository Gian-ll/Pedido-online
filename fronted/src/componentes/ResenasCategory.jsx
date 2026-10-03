import React, { useState, useEffect } from 'react';
import './ResenasCategory.css';

export default function ResenasCategory({ platos }) {
    const [comidaSeleccionada, setComidaSeleccionada] = useState("");
    const [resenas, setResenas] = useState([]);
    const [cargando, setCargando] = useState(false);

    const [nuevoComentario, setNuevoComentario] = useState("");
    const [nuevaPuntuacion, setNuevaPuntuacion] = useState(5);

    // Seleccionar automáticamente el primer plato cuando lleguen los datos
    useEffect(() => {
        if (platos && platos.length > 0 && !comidaSeleccionada) {
            setComidaSeleccionada(platos[0].id);
        }
    }, [platos]);

    // Cargar reseñas cuando cambie el plato seleccionado
    useEffect(() => {
        if (comidaSeleccionada) {
            cargarResenas(comidaSeleccionada);
        }
    }, [comidaSeleccionada]);

    const cargarResenas = async (id_comida) => {
        setCargando(true);
        try {
            const res = await fetch(`http://localhost:3000/api/resenas/${id_comida}`);
            const data = await res.json();
            setResenas(data);
        } catch (error) {
            console.error("Error cargando reseñas:", error);
        } finally {
            setCargando(false);
        }
    };

    const enviarResena = async (e) => {
        e.preventDefault();
        if (!nuevoComentario.trim() || !comidaSeleccionada) return;

        const anonName = `Usuario${Math.floor(Math.random() * 10000)}`;
        const comentarioFinal = `${anonName}: ${nuevoComentario}`;

        try {
            await fetch('http://localhost:3000/api/resenas/resenas', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    puntuacion: nuevaPuntuacion,
                    comentario: comentarioFinal,
                    comida_id_comida: comidaSeleccionada
                })
            });
            setNuevoComentario("");
            setNuevaPuntuacion(5);
            cargarResenas(comidaSeleccionada);
        } catch (error) {
            console.error("Error al enviar reseña:", error);
        }
    };

    if (!platos || platos.length === 0) return null;

    const platoActual = platos.find(p => p.id === Number(comidaSeleccionada));

    return (
        <div className="resenas-categoria-wrapper">
            <h2 className="resenas-titulo">Opiniones de la Comunidad</h2>
            <div className="resenas-container">

                {/* Panel Izquierdo: Formulario */}
                <div className="resenas-izquierda">
                    <h3>Dejar una reseña</h3>
                    <form className="resenas-form" onSubmit={enviarResena}>
                        <div className="form-group">
                            <label>¿Qué plato deseas calificar?</label>
                            <select
                                value={comidaSeleccionada}
                                onChange={(e) => setComidaSeleccionada(Number(e.target.value))}
                            >
                                {platos.map(plato => (
                                    <option key={plato.id} value={plato.id}>{plato.nombre}</option>
                                ))}
                            </select>
                        </div>

                        {platoActual && (
                            <div className="plato-preview">
                                <img src={platoActual.imagen} alt={platoActual.nombre} />
                            </div>
                        )}

                        <div className="form-group">
                            <label>Calificación</label>
                            <div className="estrellas-selector">
                                {[1, 2, 3, 4, 5].map(num => (
                                    <span
                                        key={num}
                                        className={`estrella-interactiva ${nuevaPuntuacion >= num ? 'activa' : ''}`}
                                        onClick={() => setNuevaPuntuacion(num)}
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Tu opinión</label>
                            <textarea
                                placeholder="Me encantó, la textura y el sabor son increíbles..."
                                value={nuevoComentario}
                                onChange={(e) => setNuevoComentario(e.target.value)}
                                rows={3}
                                required
                            />
                        </div>

                        <button type="submit" className="btn-enviar-resena">Publicar reseña</button>
                    </form>
                </div>

                {/* Panel Derecho: Lista de reseñas */}
                <div className="resenas-derecha">
                    <h3>Comentarios para: <span style={{ color: '#e63946' }}>{platoActual?.nombre}</span></h3>
                    <div className="resenas-lista-box">
                        {cargando ? (
                            <div className="resenas-vacio">Cargando opiniones...</div>
                        ) : resenas.length === 0 ? (
                            <div className="resenas-vacio">
                                <span className="icono-vacio">🍽️</span>
                                <p>Aún no hay reseñas para este plato.</p>
                                <span>¡Anímate y sé el primero en dejar la tuya!</span>
                            </div>
                        ) : (
                            resenas.map((r, i) => {
                                const partes = r.comentario.split(': ');
                                const nombre = partes.length > 1 ? partes[0] : "Anónimo";
                                const texto = partes.length > 1 ? partes.slice(1).join(': ') : r.comentario;

                                return (
                                    <div key={i} className="resena-card">
                                        <div className="resena-header">
                                            <div className="resena-avatar">{nombre.charAt(0)}</div>
                                            <div>
                                                <strong>{nombre}</strong>
                                                <div className="resena-estrellas">{"⭐".repeat(r.puntuacion)}</div>
                                            </div>
                                        </div>
                                        <p className="resena-texto">"{texto}"</p>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}
