// backend/controllers/labTestController.js
const LabTest = require('../models/LabTest');

// POST: Add a new lab test
const addLabTest = async (req, res) => {
    try {
        const { name, description, price, duration } = req.body;
        const labTest = new LabTest({ name, description, price, duration });
        const savedLabTest = await labTest.save();
        res.status(201).json(savedLabTest);
    } catch (err) {
        res.status(500).json({ message: 'Failed to add lab test', error: err.message });
    }
};

// GET: Get all lab tests
const getLabTests = async (req, res) => {
    try {
        const labTests = await LabTest.find();
        res.status(200).json(labTests);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch lab tests', error: err.message });
    }
};

module.exports = { addLabTest, getLabTests };
