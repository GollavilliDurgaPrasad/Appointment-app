import React, { useState } from "react";
import "./App.css";

function App() {
  const [appointments, setAppointments] = useState([]);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const addAppointment = (e) => {
    e.preventDefault();
    if (!name || !date) return;

    const newAppointment = {
      id: Date.now(),
      name,
      date,
      favorite: false,
    };

    setAppointments([...appointments, newAppointment]);
    setName("");
    setDate("");
  };

  const deleteAppointment = (id) => {
    setAppointments(appointments.filter((item) => item.id !== id));
  };

  const toggleFavorite = (id) => {
    setAppointments(
      appointments.map((item) =>
        item.id === id ? { ...item, favorite: !item.favorite } : item
      )
    );
  };

  return (
    <div className="app-container">
      <h1>Appointment Booking</h1>
      <form onSubmit={addAppointment} className="form">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <div className="appointments-list">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="appointment-card">
            <div>
              <h3>{appointment.name}</h3>
              <p>{appointment.date}</p>
            </div>
            <div className="actions">
              <span
                className={`star ${appointment.favorite ? "active" : ""}`}
                onClick={() => toggleFavorite(appointment.id)}
              >
                ★
              </span>
              <button onClick={() => deleteAppointment(appointment.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
