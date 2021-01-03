const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true  },
    birthday: { type: String, required: true  },
    contact_person: { type: String, required: true },
});

const Client = mongoose.model('Client', ClientSchema);

module.exports = Client;