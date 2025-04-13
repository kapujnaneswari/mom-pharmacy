// backend/routes/labTestRoutes.js
const express = require('express');
const router = express.Router();
const { addLabTest, getLabTests } = require('../controllers/labTestController');

// POST: Add a new lab test
router.post('/', addLabTest);

// GET: Get all lab tests
router.get('/', getLabTests);

module.exports = router;
