 import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import './index.css'; // Build CSS désactivé, on utilise le CDN Tailwind dans index.html pour la production

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
