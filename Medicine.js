const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
    name: { type: String, required: true },
    brand: { type: String },
    price: { type: Number, required: true },
    description: { type: String },
    stock: { type: Number, default: 0 },
    image: { type: String }, // URL for now, or path later
}, {
    timestamps: true
});

module.exports = mongoose.model('Medicine', medicineSchema);
