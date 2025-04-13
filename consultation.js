// backend/models/Doctor.js
const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  availableSlots: {
    type: [String],  // Array of time slots, e.g., ["9:00 AM", "10:00 AM"]
    required: true,
  },
});

module.exports = mongoose.model('Doctor', doctorSchema);
