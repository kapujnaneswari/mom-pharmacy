// backend/models/LabTest.js
const mongoose = require('mongoose');

const labTestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    duration: {
        type: String,
        required: true, // Example: "1 day", "2 hours", etc.
    },
});

const LabTest = mongoose.model('LabTest', labTestSchema);
module.exports = LabTest;
