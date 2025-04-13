import React, { useEffect, useState } from 'react';
import './Doctors.css';


const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/doctors');
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div>
      <h1>Available Doctors</h1>
      <div className="doctor-cards">
        {doctors.length > 0 ? (
          doctors.map((doctor) => (
            <div key={doctor._id} className="doctor-card">
              <h2>{doctor.name}</h2>
              <p>{doctor.specialization}</p>
              <p>Price: ${doctor.price}</p>
              <p>Available Slots:</p>
              <ul>
                {doctor.availableSlots.map((slot, index) => (
                  <li key={index}>{slot}</li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>No doctors available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default Doctors;

