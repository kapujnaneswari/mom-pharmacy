import React, { useState, useEffect } from 'react';

const Consultation = () => {
  const [doctors, setDoctors] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    doctor: '', // store doctor _id
    timeSlot: '',
  });
  const [availableSlots, setAvailableSlots] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/doctors');
        const data = await response.json();
        console.log('Fetched doctors:', data); // 🔍 Debug
        setDoctors(data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };
    fetchDoctors();
  }, []);

  const handleDoctorChange = (e) => {
    const selectedDoctorId = e.target.value;
    setFormData({ ...formData, doctor: selectedDoctorId });

    const doctor = doctors.find(doc => doc._id === selectedDoctorId);
    setAvailableSlots(doctor ? doctor.availableSlots : []);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const selectedDoctor = doctors.find(doc => doc._id === formData.doctor);

    const payload = {
      name: formData.name,
      doctor: selectedDoctor.name, // sending name
      timeSlot: formData.timeSlot,
    };

    const response = await fetch('http://localhost:5000/api/consultations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      alert('Consultation booked successfully');
      setFormData({ name: '', doctor: '', timeSlot: '' });
      setAvailableSlots([]);
    } else {
      alert('Error booking consultation');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px', maxWidth: '500px' }}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>

      <div>
        <label>Doctor</label>
        <select
          value={formData.doctor}
          onChange={handleDoctorChange}
          required
        >
          <option value="">Select Doctor</option>
          {doctors.map((doc) => (
            <option key={doc._id} value={doc._id}>
              {doc.name} ({doc.specialization})
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Available Time Slot</label>
        <select
          value={formData.timeSlot}
          onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
          required
          disabled={availableSlots.length === 0}
        >
          <option value="">Select Time Slot</option>
          {availableSlots.map((slot, index) => (
            <option key={index} value={slot}>{slot}</option>
          ))}
        </select>
      </div>

      <button type="submit" style={{ marginTop: '10px' }}>
        Book Consultation
      </button>
    </form>
  );
};

export default Consultation;







