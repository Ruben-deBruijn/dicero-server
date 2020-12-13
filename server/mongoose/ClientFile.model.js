const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientFileSchema = new Schema({
    observation: { type: Schema.Types.ObjectId, ref: 'observation'},
    client: {type: Schema.Types.ObjectId, ref: 'client'},
    user: {type: Schema.Types.ObjectId, ref: 'user'},
});

const ClientFile = mongoose.model('clientfile', ClientFileSchema);

module.exports = ClientFile;