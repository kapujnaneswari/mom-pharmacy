// backend/routes/consultationRoutes.js
const express = require('express');
const router = express.Router();
const { bookConsultation } = require('../controllers/consultationController');

// POST: Book consultation
router.post('/', bookConsultation);

module.exports = router;



