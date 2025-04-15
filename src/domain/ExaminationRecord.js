class ExaminationRecord {
    constructor({ date, diagnosis, treatment, doctorName, charts }) {
      this.date = date;
      this.diagnosis = diagnosis;
      this.treatment = treatment;
      this.doctorName = doctorName;
      this.charts = charts;
    }
  }
  module.exports = ExaminationRecord;
  