import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

function hidePreloader() {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.style.display = 'none'; 
    // or preloader.remove(); 
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  hidePreloader() // Hide preloader after App mounts
);
