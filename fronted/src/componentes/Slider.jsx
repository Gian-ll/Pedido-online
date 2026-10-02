import React, { useState, useEffect } from 'react';
import './Slider.css';

const slides = [
  {
    image: '/slider1.jpg',
    title: 'Sabores Inolvidables',
    subtitle: 'Descubre las mejores hamburguesas artesanales de la ciudad.'
  },
  {
    image: '/slider2.jpg',
    title: 'Pizza a la Leña',
    subtitle: 'Ingredientes frescos y masa crujiente horneada a la perfección.'
  },
  {
    image: '/slider3.jpg',
    title: 'Sushi Premium',
    subtitle: 'Un viaje de sabor y elegancia directo a tu paladar.'
  }
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="slider-container">
      <div className="slider-overlay"></div>
      
      <img 
        key={currentIndex} 
        src={slides[currentIndex].image} 
        alt={slides[currentIndex].title} 
        className="slider-image" 
      />
      
      <div key={`text-${currentIndex}`} className="slider-content">
        <h2 className="slider-title">{slides[currentIndex].title}</h2>
        <p className="slider-subtitle">{slides[currentIndex].subtitle}</p>
      </div>

      <button className="slider-btn prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="slider-btn next" onClick={nextSlide}>
        &#10095;
      </button>
      
      <div className="slider-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
