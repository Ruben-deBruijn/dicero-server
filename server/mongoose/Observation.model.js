const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const ObservationSchema = new Schema({
    description: { type: String },
    client: {type: Schema.Types.ObjectId, ref: 'Client', required: true },
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true },
});

const Observation = mongoose.model('Observation', ObservationSchema);

module.exports = Observation;