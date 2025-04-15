const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
  date: Date,
  diagnosis: String,
  treatment: String,
  doctorName: String,
  charts: [String]
});

const patientSchema = new mongoose.Schema({
  registrationNumber: { type: String, required: true, unique: true },
  name: String,
  history: [historySchema]
});

const PatientModel = mongoose.model('Patient', patientSchema);
module.exports = PatientModel;
