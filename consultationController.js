// backend/controllers/consultationController.js
const Consultation = require('../models/Consultation');

const bookConsultation = async (req, res) => {
  const { name, doctor, timeSlot } = req.body;

  try {
    const newConsultation = new Consultation({ name, doctor, timeSlot });
    await newConsultation.save();
    res.status(201).json({ message: 'Consultation booked successfully' });
  } catch (error) {
    console.error('Booking error:', error.message);
    res.status(500).json({ message: 'Server error while booking consultation' });
  }
};

module.exports = { bookConsultation };

