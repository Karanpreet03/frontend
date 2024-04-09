// backend/controllers/routes.js
const express = require('express');
const router = express.Router();
const Employee = require('../model/Employee');

// POST: Create a new employee
router.post('/employees', async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json({ employee });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET: Get all employees
router.get('/employees', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json({ employees });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
