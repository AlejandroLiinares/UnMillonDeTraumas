import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Importar el componente principal App
import App from './App'

// Renderizar la aplicación
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
