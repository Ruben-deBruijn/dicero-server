const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientFileSchema = new Schema({
    observations: [{ type: Schema.Types.ObjectId, ref: 'Observation'}],
    client: { type: Schema.Types.ObjectId, ref: 'Client', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true},
});

const ClientFile = mongoose.model('ClientFile', ClientFileSchema);

module.exports = ClientFile;