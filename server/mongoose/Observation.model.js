const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObservationSchema = new Schema({
    description: { type: String, required: false},
    client: {type: Schema.Types.ObjectId, ref: 'client'},
    user: {type: Schema.Types.ObjectId, ref: 'user'},
});

const Observation = mongoose.model('observation', ObservationSchema);

module.exports = Observation;