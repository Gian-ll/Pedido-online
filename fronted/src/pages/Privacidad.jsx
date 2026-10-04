import React from 'react';
import './Terminos.css'; // Usamos los mismos estilos base para mantener la coherencia visual

function Privacidad() {
  return (
    <div className="terminos-container">
      <div className="terminos-header">
        <h1>Política de Privacidad</h1>
        <p>Tu privacidad es importante para nosotros. Conoce cómo protegemos tu información.</p>
      </div>
      
      <div className="terminos-content">
        <section className="terminos-section">
          <h2>1. Información que recopilamos</h2>
          <p>Para procesar tus pedidos de forma exitosa, necesitamos recopilar cierta información personal, como tu nombre completo, número de teléfono (para contactarte al momento de la entrega) y tu dirección (para enviar a nuestros repartidores).</p>
        </section>

        <section className="terminos-section">
          <h2>2. Uso de la información</h2>
          <p>La información que nos proporcionas se utiliza exclusivamente para preparar y enviar tus pedidos a domicilio, comunicarnos contigo en caso de alguna eventualidad con tu orden y llevar un registro de tu historial de compras para mejorar tu experiencia.</p>
        </section>

        <section className="terminos-section">
          <h2>3. Protección de tus datos</h2>
          <p>Implementamos medidas de seguridad para mantener tu información personal protegida. No compartimos, vendemos, ni alquilamos tus datos personales a terceros bajo ninguna circunstancia, salvo lo estrictamente necesario para cumplir con la entrega a través de nuestros repartidores.</p>
        </section>

        <section className="terminos-section">
          <h2>4. Almacenamiento local</h2>
          <p>Nuestro sitio web puede almacenar tu historial de pedidos en tu navegador (memoria local) para que puedas revisarlos de forma rápida. Esta información no rastrea tus actividades fuera de nuestra plataforma y puede ser borrada limpiando la memoria de tu navegador.</p>
        </section>

        <section className="terminos-section">
          <h2>5. Cambios en esta política</h2>
          <p>Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Si realizamos cambios importantes sobre cómo tratamos tus datos personales, publicaremos dichas actualizaciones en esta misma página web.</p>
        </section>
      </div>
    </div>
  );
}

export default Privacidad;
