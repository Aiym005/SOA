const MongoPatientRepository = require('../../infrastructure/repositories/MongoPatientRepository');
const ViewPatientHistory = require('../../application/ViewPatientHistory');

const repo = new MongoPatientRepository();
const viewHistory = new ViewPatientHistory(repo);

exports.getPatientHistory = async (req, res) => {
  try {
    const patient = await viewHistory.execute(req.params.registrationNumber);
    res.json(patient);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
