/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css'
import CalendarApp from './components/CalendarApp';

function App() {
  // Renderizar el componente principal de la aplicación
  return (
    <div>
      {/* Título de la aplicación */}
      <h1 className="text-center text-2xl font-bold my-4">Calendario de Citas</h1>
      {/* Componente del calendario */}
      <CalendarApp />
    </div>
  );
}

export default App
