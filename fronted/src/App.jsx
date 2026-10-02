import { useState } from 'react'
import './App.css'

import Navbar from './componentes/Navbar';
import Catalogo from "./pages/Catalogo";
import Carrito from "./pages/Carrito";

function App() {
  const [carrito, setCarrito] = useState([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

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
      />

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
        <Catalogo onAgregar={agregarAlCarrito} />
      )}
    </div>
  );
}

export default App
