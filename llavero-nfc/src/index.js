import React from 'react';
import ReactDOM from 'react-dom/client';  // Cambiar esta importación
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));  // Usamos createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
