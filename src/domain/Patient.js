class Patient {
    constructor({ id, registrationNumber, name, history }) {
      this.id = id;
      this.registrationNumber = registrationNumber;
      this.name = name;
      this.history = history; // array of ExaminationRecord
    }
  }
  module.exports = Patient;
  