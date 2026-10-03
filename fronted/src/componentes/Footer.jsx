import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Pedido Online</h4>
          <p>Tu comida favorita, caliente y rápido en la puerta de tu casa.</p>
        </div>
        <div className="footer-section">
          <h4>Enlaces</h4>
          <ul>
            <li><a href="#inicio" onClick={e => e.preventDefault()}>Inicio</a></li>
            <li><a href="#nosotros" onClick={e => e.preventDefault()}>Sobre nosotros</a></li>
            <li><a href="#contacto" onClick={e => e.preventDefault()}>Contacto</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li><a href="#terminos" onClick={e => e.preventDefault()}>Términos de servicio</a></li>
            <li><a href="#privacidad" onClick={e => e.preventDefault()}>Política de privacidad</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {year} Pedido Onlin. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
