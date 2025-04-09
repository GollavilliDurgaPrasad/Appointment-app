import React, { useState } from 'react';

const AppointmentForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && date && time) {
      onAdd({ name, date, time });
      setName('');
      setDate('');
      setTime('');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Book Appointment</h2>
      <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      <button type="submit">Book</button>
    </form>
  );
};

export default AppointmentForm;
