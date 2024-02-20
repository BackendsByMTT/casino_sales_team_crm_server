const mongoose = require('mongoose');

const bbSchema = new mongoose.Schema({
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique:true,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true
    });

const BBSchema = mongoose.model('User', bbSchema);

module.exports = BBSchema;
