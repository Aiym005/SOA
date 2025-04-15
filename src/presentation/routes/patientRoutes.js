const express = require('express');
const router = express.Router();
const PatientModel = require('../../infrastructure/models/PatientModel');

// POST route to add patient history
router.post('/', async (req, res) => {
  try {
    const existing = await PatientModel.findOne({ registrationNumber: req.body.registrationNumber });

    if (existing) {
      existing.history.push(...req.body.history);
      await existing.save();
      return res.status(200).json(existing);
    }

    const newPatient = new PatientModel(req.body);
    await newPatient.save();
    res.status(201).json(newPatient);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
router.get('/:registrationNumber', async (req, res) => {
  try {
    const patient = await PatientModel.findOne({ registrationNumber: req.params.registrationNumber });

    if (!patient) {
      return res.status(404).json({ message: 'Data not found' });
    }

    res.status(200).json(patient);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;
