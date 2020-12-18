const { ObjectID } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true  },
    address: { type: String, required: true  },
    city: {type: String, required: true },
    postal_code: {type: String, required: true },
});

const Client = mongoose.model('Client', ClientSchema);

module.exports = Client;