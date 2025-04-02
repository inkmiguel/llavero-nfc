import React from 'react';
import './Button.css';

function Button() {
  const handleClick = () => {
    const phoneNumber = '+528334393035';
    const message = encodeURIComponent('¡Hola Miguel! Encontré tu chingaderas.');
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.location.href = url;
  };

  return (
    <button className="button" onClick={handleClick}>
      Contactar por WhatsApp
    </button>
  );
}

export default Button;
