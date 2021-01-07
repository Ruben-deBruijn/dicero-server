const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObservationFileSchema = new Schema({
    shift: { type: String, required: true },
    observations: [{ type: Schema.Types.ObjectId, ref: 'Observation'}],
    client: { type: Schema.Types.ObjectId, ref: 'Client', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true},
});

const ObservationFile = mongoose.model('ObservationFile', ObservationFileSchema);

module.exports = ObservationFile;