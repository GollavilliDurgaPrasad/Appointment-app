import React from 'react';

const AppointmentList = ({ appointments }) => {
  return (
    <div className="appointments">
      <h2>Upcoming Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments booked yet.</p>
      ) : (
        <ul>
          {appointments.map((app, index) => (
            <li key={index}>
              <strong>{app.name}</strong> – {app.date} at {app.time}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AppointmentList;
