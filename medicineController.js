const Medicine = require('../models/Medicine');

// Create a new medicine
const addMedicine = async (req, res) => {
    try {
        const { name, brand, price, description, stock, image } = req.body;

        const medicine = new Medicine({ name, brand, price, description, stock, image });
        const saved = await medicine.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(500).json({ message: 'Failed to add medicine', error: err.message });
    }
};

// Get all medicines
const getMedicines = async (req, res) => {
    try {
        const medicines = await Medicine.find();
        res.json(medicines);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch medicines', error: err.message });
    }
};

module.exports = { addMedicine, getMedicines };
