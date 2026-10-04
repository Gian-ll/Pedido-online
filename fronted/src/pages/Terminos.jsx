import React from 'react';
import './Terminos.css';

function Terminos() {
  return (
    <div className="terminos-container">
      <div className="terminos-header">
        <h1>Términos de Servicio</h1>
        <p>Por favor lee detenidamente nuestras políticas antes de utilizar nuestra plataforma.</p>
      </div>
      
      <div className="terminos-content">
        <section className="terminos-section">
          <h2>1. Aceptación de los Términos</h2>
          <p>Al acceder y utilizar nuestra plataforma de Pedidos Online, aceptas estar sujeto a estos Términos de Servicio. Si no estás de acuerdo con alguna parte de los términos, no podrás acceder a nuestros servicios de entrega de comida.</p>
        </section>

        <section className="terminos-section">
          <h2>2. Uso del Servicio</h2>
          <p>Nuestra plataforma permite a los usuarios navegar por nuestro catálogo y realizar pedidos de comida para entrega a domicilio o recojo. Te comprometes a proporcionar información precisa y actualizada (como tu nombre, dirección y teléfono) para asegurar que la entrega se realice sin inconvenientes.</p>
        </section>

        <section className="terminos-section">
          <h2>3. Precios y Pagos</h2>
          <p>Todos los precios mostrados en nuestro catálogo incluyen los impuestos aplicables. Nos reservamos el derecho de modificar los precios en cualquier momento. El pago se realizará en el momento de la entrega o recojo, a menos que se especifique lo contrario.</p>
        </section>

        <section className="terminos-section">
          <h2>4. Cancelaciones</h2>
          <p>Los pedidos pueden ser cancelados siempre y cuando no hayan comenzado a ser preparados por la cocina. Una vez que el pedido entre en estado de preparación, no se aceptarán cancelaciones. Usa la sección de "Historial" para gestionar tus pedidos.</p>
        </section>

        <section className="terminos-section">
          <h2>5. Tiempos de Entrega</h2>
          <p>Los tiempos de entrega proporcionados son aproximados. Hacemos nuestro mejor esfuerzo para que tu comida llegue caliente y a tiempo, pero estamos sujetos a condiciones de tráfico, clima y alta demanda en nuestro local.</p>
        </section>
      </div>
    </div>
  );
}

export default Terminos;
