// backend/controllers/doctorController.js
const Doctor = require('../models/Doctor');

// GET: Get all doctors
const getDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.status(200).json(doctors);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch doctors', error: err.message });
    }
};

// POST: Book a consultation
const bookConsultation = async (req, res) => {
    try {
        const { doctorId, timeSlot, userName, userContact } = req.body;

        // Check if the time slot is available for the doctor
        const doctor = await Doctor.findById(doctorId);
        if (!doctor) {
            return res.status(404).json({ message: 'Doctor not found' });
        }

        if (!doctor.availableSlots.includes(timeSlot)) {
            return res.status(400).json({ message: 'Selected time slot is unavailable' });
        }

        // Book the consultation (for simplicity, we'll just return confirmation)
        res.status(200).json({
            message: `Consultation booked with Dr. ${doctor.name} at ${timeSlot}`,
            doctor: doctor.name,
            timeSlot,
            userName,
            userContact,
        });
    } catch (err) {
        res.status(500).json({ message: 'Failed to book consultation', error: err.message });
    }
};

module.exports = { getDoctors, bookConsultation };
