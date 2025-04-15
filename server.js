const express = require('express');
const mongoose = require('mongoose');
const patientRoutes = require('./src/presentation/routes/patientRoutes');

const app = express();
mongoose.connect('mongodb://localhost:27017/hospital');

app.use(express.json());
app.use('/api/patients', patientRoutes);

app.listen(3001, () => console.log('Server running on port 3001'));
