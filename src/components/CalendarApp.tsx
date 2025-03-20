import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const CalendarApp: React.FC = () => {
  // Estado para almacenar las citas en el calendario
  const [appointments, setAppointments] = useState<{ title: string; start: string }[]>([]);

  // useEffect para cargar las citas al montar el componente
  useEffect(() => {
    fetchAppointments();
  }, []);

  // Función para obtener las citas desde la API
  const fetchAppointments = async () => {
    try {
      const response = await fetch("https://api.tu-barberia.com/citas"); // URL de la API
      const data = await response.json();
      // Mapeo de los datos obtenidos para adaptarlos al formato del calendario
      setAppointments(
        data.map((cita: any) => ({
          title: cita.cliente,
          start: cita.fecha,
        }))
      );
    } catch (error) {
      console.error("Error al obtener citas:", error);  
    }
  };

  // Función para manejar el clic en una fecha del calendario
  const handleDateClick = async (info: any) => {
    // Solicitar el nombre del cliente para agendar la cita
    const nombre = prompt("Introduce tu nombre para agendar cita:");
    if (!nombre) return;

    // Crear un objeto con los datos de la nueva cita
    const nuevaCita = { cliente: nombre, fecha: info.dateStr };

    try {
      // Enviar la nueva cita a la API
      await fetch("https://api.tu-barberia.com/citas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevaCita),
      });
      // Actualizar el estado con la nueva cita
      setAppointments([...appointments, { title: nombre, start: info.dateStr }]);
    } catch (error) {
      console.error("Error al registrar la cita:", error);
    }
  };

  return (
    // Componente FullCalendar con configuración de plugins y eventos
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridWeek"
      events={appointments}
      dateClick={handleDateClick}
    />
  );
};

export default CalendarApp;