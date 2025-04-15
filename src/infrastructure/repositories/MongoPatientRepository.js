const PatientModel = require('../models/PatientModel');
const Patient = require('../../domain/Patient');

class MongoPatientRepository {
  async findByRegistrationNumber(registrationNumber) {
    const doc = await PatientModel.findOne({ registrationNumber });
    if (!doc) return null;
    return new Patient(doc);
  }
}
module.exports = MongoPatientRepository;
