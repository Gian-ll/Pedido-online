import { useState, useEffect } from 'react'
import './App.css'

import Navbar from './componentes/Navbar';
import Slider from './componentes/Slider';
import Catalogo from "./pages/Catalogo";
import Carrito from "./pages/Carrito";
import Footer from './componentes/Footer';

function App() {
  const [carrito, setCarrito] = useState([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  // Volver arriba cuando se cambia de vista
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [mostrarCarrito]);

  // Agregar comida al carrito
  const agregarAlCarrito = (comida) => {
    setCarrito([...carrito, comida]);
  };

  // Eliminar un producto
  const eliminarDelCarrito = (index) => {
    const nuevoCarrito = carrito.filter((_, i) => i !== index);
    setCarrito(nuevoCarrito);
  };

  // Vaciar carrito
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  // Abrir y cerrar carrito
  const abrirCarrito = () => {
    setMostrarCarrito(true);
  };

  const volverCatalogo = () => {
    setMostrarCarrito(false);
  };

  // Abrir catálogo
  const abrirCatalogo = () => {
    setMostrarCarrito(false);
  };

  return (
    <div className="app">
      <Navbar
        cantidadCarrito={carrito.length}
        onAbrirCarrito={abrirCarrito}
        onAbrirCatalogo={abrirCatalogo}
      />

      <main className="main-content">
        {mostrarCarrito ? (
        <>
          <Carrito
            carrito={carrito}
            onEliminar={eliminarDelCarrito}
            onVaciar={vaciarCarrito}
          />

          <div className="volver-container">
            <button className="volver-btn" onClick={abrirCatalogo}>
              Volver a la carta
            </button>
          </div>
        </>
      ) : (
        <>
          <Slider />
          <Catalogo onAgregar={agregarAlCarrito} />
        </>
      )}
      </main>

      <Footer />
    </div>
  );
}

export default App
