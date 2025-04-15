class ViewPatientHistory {
    constructor(patientRepository) {
      this.patientRepository = patientRepository;
    }
  
    async execute(registrationNumber) {
      const patient = await this.patientRepository.findByRegistrationNumber(registrationNumber);
      if (!patient) {
        throw new Error('Data not found');
      }
      return patient;
    }
  }
  module.exports = ViewPatientHistory;
  