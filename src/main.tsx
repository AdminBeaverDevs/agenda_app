import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "@fullcalendar/common/main.css";
import "@fullcalendar/common/main.min.css";
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Renderizar la aplicación dentro del contenedor con id 'root' */}
    <App />
  </StrictMode>,
)
