const mongoose = require('mongoose');
const ClientSchema = new mongoose.Schema({
    name: String,
    value: String,
    status: String
},{
    timestamps: true,
});

module.exports = mongoose.model('Client', ClientSchema);