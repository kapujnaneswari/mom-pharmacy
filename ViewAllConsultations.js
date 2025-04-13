import React, { useEffect, useState } from 'react';
import './ViewAllConsultations.css';


const ViewAllConsultations = () => {
  const [consultations, setConsultations] = useState([]);

  useEffect(() => {
    const fetchConsultations = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/consultations');
        const data = await res.json();
        setConsultations(data);
      } catch (error) {
        console.error('Error fetching consultations:', error);
      }
    };

    fetchConsultations();
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h1>All Booked Consultations</h1>
      <ul>
        {consultations.map((c) => (
          <li key={c._id}>
            <strong>{c.name}</strong> with <strong>{c.doctor}</strong> at{' '}
            <strong>{new Date(c.timeSlot).toLocaleString()}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewAllConsultations;
