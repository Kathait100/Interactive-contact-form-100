const mongoose = require('mongoose');
const contactSchema = new mongoose.Schema({
    name:  String, 
    designation: String,
    expertise:   String,
});

const contact = mongoose.model('Contact', contactSchema);

module.exports = contact;