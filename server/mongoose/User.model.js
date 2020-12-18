const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, required: true},
    email: { type: String, required: true },
    address: { type: String, required: true },
    city: {type: String, required: true},
    postal_code: {type: String, required: true},
    job_title: {type: String, required: true},
});

const User = mongoose.model('User', UserSchema);

module.exports = User;