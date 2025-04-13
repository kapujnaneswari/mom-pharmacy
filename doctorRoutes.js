// backend/routes/doctorRoutes.js
const express = require('express');
const router = express.Router();
const { getDoctors } = require('../controllers/doctorController');

// GET: Get all doctors
router.get('/', getDoctors);

module.exports = router;

