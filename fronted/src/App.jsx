import { useState, useEffect } from 'react'
import './App.css'

import Navbar from './componentes/Navbar';
import Slider from './componentes/Slider';
import Catalogo from "./pages/Catalogo";
import Carrito from "./pages/Carrito";
import Historial from "./pages/Historial";
import Footer from './componentes/Footer';
import CategoriaPage from './pages/CategoriaPage';

function App() {
  const [carrito, setCarrito] = useState([]);
  const [vistaActual, setVistaActual] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('vista') || 'catalogo';
  });

  const cambiarVista = (nuevaVista) => {
    setVistaActual(nuevaVista);
    window.history.pushState({ vista: nuevaVista }, '', `?vista=${nuevaVista}`);
  };

  // Optimizacion: Descargar el menu solo una vez al abrir la pagina
  const [menuGlobal, setMenuGlobal] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:3000/api/menu')
      .then(res => res.json())
      .then(data => {
        // Le agregamos el id que necesita el frontend a todos los platos
        const menuFormateado = data.map(item => ({ ...item, id: item.id_comida }));
        setMenuGlobal(menuFormateado);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const manejarBotonAtras = (evento) => {
      if (evento.state && evento.state.vista) {
        setVistaActual(evento.state.vista);
      } else {
        setVistaActual('catalogo');
      }
    };
    window.addEventListener('popstate', manejarBotonAtras);
    window.history.replaceState({ vista: vistaActual }, '', `?vista=${vistaActual}`);

    return () => window.removeEventListener('popstate', manejarBotonAtras);
  }, []);

  // Cargar historial de localStorage si existe, o inicializar vacío
  const [historial, setHistorial] = useState(() => {
    const guardado = localStorage.getItem('historialPedidos');
    return guardado ? JSON.parse(guardado) : [];
  });

  // Guardar en localStorage cuando el historial cambie
  useEffect(() => {
    localStorage.setItem('historialPedidos', JSON.stringify(historial));
  }, [historial]);

  // Volver arriba cuando se cambia de vista
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [vistaActual]);

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

  const confirmarPedido = async (datosCliente, total) => {
    // Agrupar los items del carrito para el backend (cantidad, precio, id)
    const detalles = carrito.reduce((acc, comida) => {
      const existente = acc.find(item => item.id_comida === comida.id);
      if (existente) {
        existente.cantidad += 1;
      } else {
        acc.push({
          id_comida: comida.id,
          cantidad: 1,
          precio_unitario: comida.precio
        });
      }
      return acc;
    }, []);

    const payload = {
      cliente: {
        nombre: datosCliente.nombre,
        dni: datosCliente.dni,
        telefono: datosCliente.telefono,
        direccion: datosCliente.direccion
      },
      total: total,
      detalles: detalles
    };

    try {
      const respuesta = await fetch('http://localhost:3000/api/pedidos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!respuesta.ok) {
        throw new Error('Error al procesar el pedido en el backend');
      }

      // El backend nos devuelve el número de orden generado y el repartidor
      const { numero_orden, repartidor } = await respuesta.json();

      const nuevoPedido = {
        id_pedido: numero_orden, // guardamos el ID real de la BD
        fecha: new Date().toLocaleString(),
        cliente: datosCliente,
        items: [...carrito],
        total: total,
        repartidor: repartidor // guardamos el repartidor real de la BD
      };

      // Lo agregamos al historial local para que se siga viendo en pantalla
      setHistorial([nuevoPedido, ...historial]);

      // Vaciamos carrito y vamos al historial
      setCarrito([]);
      cambiarVista('historial');
      alert(`¡Pedido #${numero_orden} registrado con éxito en la base de datos!`);

    } catch (error) {
      console.error(error);
      alert('Hubo un problema al guardar el pedido. Intenta nuevamente.');
    }
  };

  return (
    <div className="app">
      <Navbar
        cantidadCarrito={carrito.length}
        onAbrirCarrito={() => cambiarVista('carrito')}
        onAbrirCatalogo={() => cambiarVista('catalogo')}
        onAbrirHistorial={() => cambiarVista('historial')}
      />

      <main className="main-content">
        {vistaActual === 'carrito' && (
          <>
            <Carrito
              carrito={carrito}
              onEliminar={eliminarDelCarrito}
              onVaciar={vaciarCarrito}
              onConfirmar={confirmarPedido}
            />
            <div className="volver-container">
              <button className="volver-btn" onClick={() => cambiarVista('catalogo')}>
                Volver a la carta
              </button>
            </div>
          </>
        )}

        {vistaActual === 'historial' && (
          <>
            <Historial historial={historial} />
            <div className="volver-container">
              <button className="volver-btn" onClick={() => cambiarVista('catalogo')}>
                Volver a la carta
              </button>
            </div>
          </>
        )}

        {['pizzas', 'sandwiches', 'ensaladas', 'bebidas'].includes(vistaActual) && (
          <>
            {vistaActual === 'pizzas' && <CategoriaPage titulo="Pizzas" categoriaId={1} menu={menuGlobal} onAgregar={agregarAlCarrito} />}
            {vistaActual === 'sandwiches' && <CategoriaPage titulo="Sándwiches" categoriaId={2} menu={menuGlobal} onAgregar={agregarAlCarrito} />}
            {vistaActual === 'ensaladas' && <CategoriaPage titulo="Ensaladas" categoriaId={3} menu={menuGlobal} onAgregar={agregarAlCarrito} />}
            {vistaActual === 'bebidas' && <CategoriaPage titulo="Bebidas" categoriaId={4} menu={menuGlobal} onAgregar={agregarAlCarrito} />}
            <div className="volver-container">
              <button className="volver-btn" onClick={() => cambiarVista('catalogo')}>
                Volver al menú
              </button>
            </div>
          </>
        )}

        {vistaActual === 'catalogo' && (
          <>
            <Slider />
            <Catalogo onAbrirCategoria={(cat) => cambiarVista(cat)} />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App
