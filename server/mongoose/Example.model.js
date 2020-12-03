const mongoose = require('mongoose');

const Example = mongoose.model('Example',{
    title: String,
});

module.exports = Example;