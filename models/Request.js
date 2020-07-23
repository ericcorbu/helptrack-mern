const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RequestSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
});

module.exports = Request = mongoose.model('request', RequestSchema);