const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const ObservationSchema = new Schema({
    description: { type: String, required: true },
});

const Observation = mongoose.model('Observation', ObservationSchema);

module.exports = Observation;