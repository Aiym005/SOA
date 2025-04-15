const mongoose = require('mongoose');
const Patient = require('./src/infrastructure/models/PatientModel');

mongoose.connect('mongodb://localhost:27017/hospital', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const samplePatient = new Patient({
  registrationNumber: 'REG123',
  name: 'John Doe',
  history: [
    {
      date: new Date(),
      diagnosis: 'Flu',
      treatment: 'Rest and hydration',
      doctorName: 'Dr. Smith',
      charts: ['chart1.png', 'chart2.png'],
    },
  ],
});

samplePatient.save()
  .then(() => {
    console.log('Sample patient saved!');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error(err);
    mongoose.connection.close();
  });
